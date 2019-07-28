import { Component, OnInit } from '@angular/core';
import { Health, HealthData } from '@ionic-native/health/ngx';
import { AlertController } from '@ionic/angular';
import { Constants } from 'src/app/constants';
import { CaseService } from 'src/app/services/case.service';
import { RestApiService } from 'src/app/services/rest-api.service';
import { Reaction } from 'src/app/model/reaction';
import { ReactionType } from 'src/app/model/reaction-type.enum';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.page.html',
  styleUrls: ['./recommendations.page.scss'],
})
export class RecommendationsPage implements OnInit {
  private static TIME_THRESHOLD = 30 * 24 * 60 * 1000; // A month
  private static RESULT_LIMIT = 5;
  private heartRateMessage = 'Unavailable';

  messagesBehavioral = [
    'Make a list of your concerns and decide what to tackle first. Take one step at a time.',
    'Where appropriate, rely on your family, friends, and community for practical assistance.',
    'Remember that substance use and other addictive behaviors can lead to problems with sleep, relationships, jobs, and physical health.',
    'Don’t withdraw from others because you feel you might burden them. Most people do better after disasters turning to others.',
    'Ask your friends and family how they are doing, rather than just giving advice, ' +
    'or telling them to “get over it.” Offer a supportive ear or lend a helping hand.',
    'Say, “We’re crabby with each other and that is completely normal, given what we’ve been through. ' +
    'I think we’re handling things amazingly. It’s a good thing we have each other.”'
  ];

  messagesEmotional = [
    'When talking with someone, find the right time and place, and ask if it is okay to talk about your feelings.',
    'Remind yourself that your feelings are expectable and you are not “going crazy,” and that you are not at fault for the disaster.',
    'When you are reminded, try saying to yourself, “I am upset because I am being reminded of the disaster, ' +
    'but it is different now because the disaster is not happening and I am safe.”',
    'Limit your viewing of news reports so you just get the information that you need.',
    'Take time to cool down, walk away from stressful situations, talk to a friend about what is making you angry, ' +
    'get physical exercise, distract yourself with positive activities, or problem-solve the situation that is making you angry.',
    'Remind yourself that being angry may harm important relationships.'
  ];

  messagesPhysical = [
    'Go to sleep at the same time every day.',
    'Don’t have caffeinated drinks in the evening.',
    'Reduce alcohol consumption.',
    'Increase daytime exercise.',
    'Relax before bedtime.',
    'Limit daytime naps to 15 minutes, and do not nap later than 4 pm'
  ];

  messagesCognitive = [
    'Getting back to a more structured routine can help improve decision-making.',
    'Remind yourself that going through a disaster can have positive effects on what you value and how you spend your time'
  ];

  messagesAll = [
    'Breathing exercise: Inhale slowly through your nose and comfortably fill your lungs all the way down to your stomach, ' +
    'while saying to yourself, “My body is filled with calm.” Exhale slowly through your mouth and empty your lungs, ' +
    'while silently saying to yourself, “My body is letting go.” Do this five times slowly, and as many times a day as needed.',
    'If these feelings persist for a month or more, get immediate help.'
  ];

  messagesDisplayed = [];

  constructor(
    private health: Health,
    private alertCtrl: AlertController,
    private caseSvc: CaseService,
    private restApiSvc: RestApiService
  ) {

    // Show messages depending on what they used
    if (this.caseSvc.hasReaction(ReactionType.Cognitive)) {
      this.messagesDisplayed = this.messagesDisplayed.concat(this.messagesPhysical);
    }
    if (this.caseSvc.hasReaction(ReactionType.Physical)) {
      this.messagesDisplayed = this.messagesDisplayed.concat(this.messagesCognitive);
    }
    if (this.caseSvc.hasReaction(ReactionType.Behavioral)) {
      this.messagesDisplayed = this.messagesDisplayed.concat(this.messagesBehavioral);
    }
    if (this.caseSvc.hasReaction(ReactionType.Emotional)) {
      this.messagesDisplayed = this.messagesDisplayed.concat(this.messagesEmotional);
    }
    this.messagesDisplayed = this.messagesDisplayed.concat(this.messagesAll);
    this.caseSvc.setRecommendations(this.messagesDisplayed);

    // Continue
    if (this.caseSvc.case) {
      this.restApiSvc.post('case', this.caseSvc.case).subscribe((aCase) => {

      });
    }
  }


  ngOnInit() {

    // Does not work. Seems to be due to a signture match error.
    this.health.isAvailable().then((available: boolean) => {
      if (available) {
        this.health.requestAuthorization([
          {
            read: [Constants.HEART_RATE]
          }
        ]).then(authorized => {
          if (authorized) {
            this.health.query({
              dataType: Constants.HEART_RATE,
              startDate: new Date(Date.now() - RecommendationsPage.TIME_THRESHOLD),
              endDate: new Date(),
              limit: RecommendationsPage.RESULT_LIMIT
            }).then((datas: HealthData[]) => {
              this.showAlert('HeartRate', JSON.stringify(datas));
              this.heartRateMessage = JSON.stringify(datas);
            }).catch(e => console.log('Error1', JSON.stringify(e)));
          } else {
            this.showAlert('Error', 'Not authorized');
          }
        }).catch(e => console.log('Error2', JSON.stringify(e)));
      } else {
        this.showAlert('Error', 'Not available');
      }
    }).catch(e => console.log('Error3', JSON.stringify(e)));

  }


  async showAlert(alertTitle: string, alertMessage: string) {
    const prompt = await this.alertCtrl.create({
      header: alertTitle,
      message: alertMessage,
      buttons: [{
        text: 'Ok',
      }]
    });
    prompt.present();
  }


}

import { Component, OnInit } from '@angular/core';
import { Reaction } from 'src/app/model/reaction';
import { ReactionType } from 'src/app/model/reaction-type.enum';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { CaseService } from 'src/app/services/case.service';

@Component({
  selector: 'app-reactions',
  templateUrl: './reactions.page.html',
  styleUrls: ['./reactions.page.scss'],
})
export class ReactionsPage implements OnInit {
  public reactionTypes = [
    {
      type: ReactionType.Physical,
      expanded: false
    }, {
      type: ReactionType.Cognitive,
      expanded: false
    }, {
      type: ReactionType.Behavioral,
      expanded: false
    }, {
      type: ReactionType.Emotional,
      expanded: false
    }
  ];

  public physicalReactions: Reaction[] = [
    new Reaction('Headaches', ReactionType.Physical),
    new Reaction('Stomachaches', ReactionType.Physical),
    new Reaction('Sleep difficulties', ReactionType.Physical),
    new Reaction('Difficulty eating', ReactionType.Physical),
    new Reaction('Worsening of health conditions', ReactionType.Physical),
    new Reaction('Fatigue / exhaustion', ReactionType.Physical),
    new Reaction('Chronic agitation', ReactionType.Physical)
  ];
  public cognitiveReactions: Reaction[] = [
    new Reaction('Inhability to accept / cope with death of loved one(s)', ReactionType.Cognitive),
    new Reaction('Distressing dreams or nightmares', ReactionType.Cognitive),
    new Reaction('Intrusive thoughts or images', ReactionType.Cognitive),
    new Reaction('Difficulty concentrating', ReactionType.Cognitive),
    new Reaction('Difficulty remembering', ReactionType.Cognitive),
    new Reaction('Difficulty making decisions', ReactionType.Cognitive),
    new Reaction('Preocupation with death / destruction', ReactionType.Cognitive)
  ];
  public behavioralReactions: Reaction[] = [
    new Reaction('Extreme Disorientation', ReactionType.Behavioral),
    new Reaction('Excessive drug, alcohol, or prescription drug use', ReactionType.Behavioral),
    new Reaction('Isolation / withdrawal', ReactionType.Behavioral),
    new Reaction('High risk behaviour', ReactionType.Behavioral),
    new Reaction('Regressive behaviour', ReactionType.Behavioral),
    new Reaction('Separation anxiety', ReactionType.Behavioral),
    new Reaction('Violent behaviour', ReactionType.Behavioral),
    new Reaction('Maladaptive coping', ReactionType.Behavioral)
  ];
  public emotionalReactions: Reaction[] = [
    new Reaction('Acute stress reactions', ReactionType.Emotional),
    new Reaction('Acute grief reactions', ReactionType.Emotional),
    new Reaction('Sadness, tearfulness', ReactionType.Emotional),
    new Reaction('Irritability, anger', ReactionType.Emotional),
    new Reaction('Feeling anxious, fearful', ReactionType.Emotional),
    new Reaction('Despair hopelessness', ReactionType.Emotional),
    new Reaction('Feeling of guilt or shame', ReactionType.Emotional),
    new Reaction('Feeling emotionally numb, disconnected', ReactionType.Emotional)
  ];



  public reactionsForm: FormGroup;
  constructor(
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private caseSvc: CaseService
  ) {
    this.reactionsForm = this.formBuilder.group({
      otherPhysical: [''],
      otherCognitive: [''],
      otherBehavioral: [''],
      otherEmotional: ['']
    });
    this.physicalReactions.map((reaction: Reaction) => {
      this.reactionsForm.addControl('0#' + reaction.id, new FormControl());
    });
    this.cognitiveReactions.map((reaction: Reaction) => {
      this.reactionsForm.addControl('1#' + reaction.id, new FormControl());
    });
    this.behavioralReactions.map((reaction: Reaction) => {
      this.reactionsForm.addControl('2#' + reaction.id, new FormControl());
    });
    this.emotionalReactions.map((reaction: Reaction) => {
      this.reactionsForm.addControl('3#' + reaction.id, new FormControl());
    });
  }


  setReactions() {
    let reactions = {};
    Object.keys(this.reactionsForm.value).forEach(element => {
      if (this.reactionsForm.value[element] !== null && this.reactionsForm.value[element] !== '') {
        reactions[element] = this.reactionsForm.value[element];
      }
    });
    this.caseSvc.setReactions(reactions);
    this.goTo('recommendations');
  }
  goTo(page: string) {
    this.navCtrl.navigateForward(page);
  }

  expandItem(item: any): void {
    if (item.expanded) {
      item.expanded = false;
    } else {
      this.reactionTypes.map(listItem => {
        if (item === listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }

  ngOnInit() {
  }

}

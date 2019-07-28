import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController, LoadingController, AlertController, ActionSheetController, ModalController } from '@ionic/angular';
import { RestApiService } from 'src/app/services/rest-api.service';
import { CaseService } from 'src/app/services/case.service';
import { EditCaseModalComponent } from './edit-case-modal/edit-case-modal.page';
import { OverlayEventDetail } from '@ionic/core';
import { Case } from 'src/app/model/case';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.page.html',
  styleUrls: ['./cases.page.scss'],
})
export class CasesPage implements OnInit {
  cases: Case[];
  casesForm: FormGroup;
  private loader: any;


  constructor(
    private formBuilder: FormBuilder,
    private loadingCtrl: LoadingController,
    private restApiSvc: RestApiService,
    private alertCtrl: AlertController,
    private actionSheetCtrl: ActionSheetController,
    private modalCtrl: ModalController
  ) {
    this.casesForm = this.formBuilder.group({
      case: ['', Validators.required]
    });
    this.reload();
  }

  async reload() {

    this.cases = [];
    // Get the latest cases.
    this.loader = await this.loadingCtrl.create({
      message: 'Loading cases...',
      backdropDismiss: true
    });
    this.loader.present().then(() => {
      this.restApiSvc.getAll('case').subscribe((cases: Case[]) => {
        cases.forEach(aCase => {
          aCase.id = aCase['_id'];
          this.cases.push(aCase);
        });
      });
      this.loader.dismiss();
    });
  }

  async caseActionSheet(id: string) {
    const newButtons = [{
      text: 'Create',
      icon: 'create',
      handler: () => {
        this.editCase(id);
      }
    }];
    const existingButtons = [{
      text: 'Modify',
      icon: 'create',
      handler: () => {
        this.editCase(id);
      }
    }, {
      text: 'Delete',
      role: 'destructive',
      icon: 'trash',
      handler: () => {
        this.confirmDelete(id);
      }
    }];
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'What do you want to do?',
      buttons: id === 'new' ? newButtons : existingButtons
    });
    await actionSheet.present();
  }

  async confirmDelete(id: string) {
    const prompt = await this.alertCtrl.create({
      header: 'Delete case?',
      message: 'Are you sure you want to delete this case?',
      buttons: [{
        text: 'Yes',
        handler: () => {
          this.deleteCase(id);
        }
      }, {
        text: 'No',
        handler: () => {
          // Do nothing.
        }
      }]
    });
    prompt.present();
  }

  async deleteCase(id: string) {
    this.restApiSvc.delete('case', id).subscribe(() => {
      this.reload();
    });
  }

  async editCase(id: string) {
    const modal: HTMLIonModalElement =
      await this.modalCtrl.create({
        component: EditCaseModalComponent,
        componentProps: {
          id
        }
      });

    modal.onDidDismiss().then((detail: OverlayEventDetail) => {
      if (detail !== null) {
        const newCreated = detail.data;
        if (newCreated) {
          this.reload();
        }
      }
    });

    await modal.present();
  }

  ngOnInit() {
  }

}

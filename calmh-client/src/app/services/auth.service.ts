import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Platform, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Constants } from '../constants';
import { AuthLevels } from './auth-levels.enum';
import { User } from '../model/user';
import { RestApiService } from './rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  /*
   * Boolean with subscriber-publisher paradigm.
   */

  constructor(
    private platform: Platform,
    private storage: Storage,
    private restApiSvc: RestApiService
  ) {
    this.platform.ready().then(() => {
      this.ifLoggedIn();
    });
  }
  public authLevel = new BehaviorSubject(AuthLevels.None);

  private CREDENTIAL_KEY = 'USER_INFO';
  private onSuccess: any;
  private onFailure: any;
  private onLogout: any;

  public user = new User(null, null, null, null);

  public login(username: string, password: string) {
    // TODO: Replace with actual user data, using external user authentication
    return new Promise((resolve, reject) => {
      if (
        username === 'admin' &&
        password === 'admin'
      ) {
        this._loginSuccessfull({ id: '0', username, password, authLevel: AuthLevels.Administrator });
        if (this.onSuccess) {
          this.onSuccess('Ok');
        }
        resolve('Ok');
      } else if (
        username === 'volunteer' &&
        password === 'volunteer'
      ) {
        this._loginSuccessfull({ id: '1', username, password, authLevel: AuthLevels.Volunteer });
        if (this.onSuccess) {
          this.onSuccess('Ok');
        }
        resolve('Ok');
      } else {
        this.restApiSvc.login({ username, password }).subscribe((res) => {
          if (res['_id']) {
            this._loginSuccessfull({ id: res['_id'], username, password, authLevel: AuthLevels.User });
            if (this.onSuccess) {
              this.onSuccess('Ok');
            }
            resolve('Ok');
          } else {
            if (this.onFailure) {
              this.onFailure(res);
              reject(res);
            }
          }
        });
      }
    });

  }

  /*
   * If the auth state was not in the class, retrieve it from the storage.
   */
  private async ifLoggedIn() {
    if (!this.authLevel.value) {
      this.storage.get(this.CREDENTIAL_KEY).then((response: any) => {
        if (response) {
          this.authLevel.next(response.authLevel);
          this.user.username = response.username;
          this.user.id = response.id;
        } else {
          console.log('Not auth.');
        }
      });
    }
  }

  private _loginSuccessfull(credentials: { id: string, username: string, password: string; authLevel: AuthLevels }) {
    this.storage.set(this.CREDENTIAL_KEY, credentials).then(() => {
      this.authLevel.next(credentials.authLevel);
      this.user.id = credentials.id;
      this.user.username = credentials.username;
    });
  }

  public setSucessCallback(onSuccess: (msg: string) => void) {
    this.onSuccess = onSuccess;
  }

  public setFailureCallback(onFailure: (error: string) => void) {
    this.onFailure = onFailure;
  }

  public setLogoutCallback(onLogout: () => void) {
    this.onLogout = onLogout;
  }

  public logout() {
    this.storage.remove(this.CREDENTIAL_KEY).then(() => {
      this.authLevel.next(AuthLevels.None);
      this.user.username = Constants.UNAUTHENTICATED;
      this.onLogout();
    });
  }

  public getHome() {
    let homePage = Constants.HOMEPAGE_USER;
    if (this.isVolunteer()) {
      homePage = Constants.HOMEPAGE_VOLUNTEER;
      if (this.isAdmin()) {
        homePage = Constants.HOMEPAGE_ADMIN;
      }
    }
    return Constants.url(homePage);
  }

  public isAdmin() {
    return this.authLevel.value > AuthLevels.Volunteer;
  }

  public isVolunteer() {
    return this.authLevel.value > AuthLevels.User;
  }

  public isUser() {
    return this.authLevel.value > AuthLevels.None;
  }

  public isAuthenticated() {
    return this.isUser();
  }

}

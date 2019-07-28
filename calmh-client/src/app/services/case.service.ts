import { Injectable } from '@angular/core';
import { Case } from '../model/case';
import { User } from '../model/user';
import { Disaster } from '../model/disaster';
import { ReactionType } from '../model/reaction-type.enum';

@Injectable({
  providedIn: 'root'
})
export class CaseService {
  case: Case;

  constructor() { }

  createNewCase() {
    this.case = new Case();
  }

  setVolunteer(user: User) {
    this.case.volunteer = { id: user.id, label: user.username };
  }

  setUser(user: User) {
    this.case.user = { id: user.id, label: user.username };
  }

  closeCase() {
    this.case.close();
  }

  setReactions(reactions: any) {
    this.case.reactions = reactions;
  }

  setRecommendations(recommendations: string[]) {
    this.case.recommendations = recommendations;
  }

  setDisaster(disaster: Disaster) {
    this.case.disaster = {
      id: disaster.id,
      label: disaster.disasterType.name + ' on ' + disaster.location
    };
  }

  /**
   * Should return true if this.case.reactions contains type
   * @param type 
   */
  hasReaction(type: ReactionType) {
    let hasIt = false;
    Object.keys(this.case.reactions).forEach(reaction => {
      if (reaction.includes(type + '#')) {
        return hasIt = true;
      }
    });
    return hasIt;
  }
}

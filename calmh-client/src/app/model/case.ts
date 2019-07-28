import { User } from './user';
import { Disaster } from './disaster';
import { Recommendation } from './recommendation';

/**
 * All users and disasters are references.
 */
export class Case {
    id: string;
    volunteer: { id: string, label: string };
    user: { id: string, label: string };
    disaster: { id: string, label: string };
    reactions: any;
    recommendations: string[];
    startDate: Date;
    endDate: Date;

    constructor() {
        this.startDate = new Date();
    }

    close() {
        this.endDate = new Date();
    }


}

import { HasId } from './has-id';
import { Disaster } from './disaster';
import { User } from './user';
import { Priority } from './priority.enum';
import { Severity } from './severity.enum';

export class Interaction extends HasId {
    disaster: Disaster;
    user: User;
    startDate: Date;
    endDate: Date;
    priority: Priority;
    severity: Severity;
    volunteer: User;
    location: string;
    recommendations: string;
}

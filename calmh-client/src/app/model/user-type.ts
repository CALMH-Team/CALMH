import { HasId } from './has-id';
import { AuthLevels } from '../services/auth-levels.enum';

export class UserType {
    authLevel: AuthLevels;
    name: string;
    description: string;

    public constructor(name: string, description: string = 'Missing decription', authLevel?: AuthLevels) {
        this.name = name;
        this.description = description;
        this.authLevel = authLevel === undefined ? AuthLevels.None : authLevel;
    }
}

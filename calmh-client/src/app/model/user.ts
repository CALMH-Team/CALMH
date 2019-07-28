import { UserType } from './user-type';
import { HasId } from './has-id';
import { AuthLevels } from '../services/auth-levels.enum';

export class User extends HasId {
    public static USER_TYPES: UserType[] = [
        new UserType('Administrator', 'A user with full rights to everything.', AuthLevels.Administrator),
        new UserType('Psychologist', 'A user with a degree of psychology.', AuthLevels.Volunteer),
        new UserType('NGO Representative', 'Non-Governmental Organisation Representative', AuthLevels.Volunteer),
        new UserType('Volunteer', 'Non-NGO nor psychiatric user.', AuthLevels.Volunteer),
        new UserType('User', 'A final user.', AuthLevels.User),
    ];

    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    language: string;
    phone: string;
    type: UserType;

    // This should only include the very basic data
    public constructor(firstName: string, lastName: string, username: string, password: string) {
        super(username, username);
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
    }
}

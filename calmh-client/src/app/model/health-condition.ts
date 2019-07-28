import { HasId } from './has-id';

export class HealthCondition extends HasId {
    public name: string;
    public id: string;

    constructor(name: string, id: string) {
        super(name, id);
        this.name = name;
    }
}

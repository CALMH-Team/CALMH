import { ReactionType } from './reaction-type.enum';
import { HasId } from './has-id';

export class Reaction extends HasId {
    public id: string;
    public name: string;
    public type: ReactionType;
    public value: string;

    constructor(name: string, type: ReactionType) {
        super(name);
        this.name = name;
        this.type = type;
    }

}

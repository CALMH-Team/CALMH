import { ConditionType } from './condition-type';
import { HasId } from './has-id';

export class Condition extends HasId {
    private static CONDITION_TYPES: ConditionType[] = [
        new ConditionType('Physical', 'Something that can be seen or felt.'),
        new ConditionType('Cognitive', 'Of the mind.')
    ];

    name: string;
    type: ConditionType;

    public constructor(name: string, type: ConditionType, id?: string) {
        super(name, id);
        this.type = type;
    }
}

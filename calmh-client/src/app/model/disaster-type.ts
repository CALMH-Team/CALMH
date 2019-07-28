import { HasId } from './has-id';

export class DisasterType extends HasId {
    id: string;
    name: string;
    description: string;

    public constructor(name: string, description: string = 'Missing decription', id?: string) {
        super(name, id);
        this.name = name;
        this.description = description;
    }
}

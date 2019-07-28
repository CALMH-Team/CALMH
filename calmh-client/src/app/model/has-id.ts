import { IHasId } from './i-has-id';

export class HasId implements IHasId {
    id: string;

    /*
    *  If theres an Id, it will be set, otherwise it will be calculated based on the name.
    */
    public constructor(name: string, id?: string) {
        this.id = id === undefined ? this.generateId(name) : id;
    }

    /*
    *  Returns the name, in lowercase, spaces to underscore, alphanumeric with underscore.
    *  TODO: Use class name.
    */
    protected generateId(name: string): string {
        return name.toLowerCase().replace(/ /g, '_').replace(/[\W]+/g, '');
    }

    public getId() {
        return this.id;
    }
}

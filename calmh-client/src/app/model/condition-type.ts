export class ConditionType {
    id: string;
    name: string;
    description: string;

    public constructor(name: string, description: string, id?: string) {
        if (name === undefined) {
            throw new Error('Name cannot be undefined');
        }
        this.name = name;
        this.description = description;
        this.id = id === undefined ? this.generateId(name) : id;
    }

    /*
    *  Returns the name, in lowercase, spaces to underscore, alphanumeric with underscore.
    */
    private generateId(name: string): string {
        return name.toLowerCase().replace(/ /g, '_').replace(/[\W]+/g, '');
    }

    public getId() {
        return this.id;
    }
}

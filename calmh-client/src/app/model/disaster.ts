import { HasId } from './has-id';
import { DisasterType } from './disaster-type';

export class Disaster extends HasId {
    public static DISASTER_TYPES: DisasterType[] = [
        new DisasterType('Avalanche / Landslide'),
        new DisasterType('Earthquake'),
        new DisasterType('Sinkhole'),
        new DisasterType('Flood'),
        new DisasterType('Tsunami'),
        new DisasterType('Cyclone/Hail/Ice/Thunder Storm')
    ];

    name: string;
    date: Date;
    location: string;
    disasterType: DisasterType;
    description: string;

    public constructor(name: string, date: Date, location: string, disasterType: DisasterType, description: string) {
        super(name, name);
        this.name = name;
        this.date = date;
        this.location = location;
        this.disasterType = disasterType;
        this.description = description;
    }
}

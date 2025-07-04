import { ObjectId } from 'mongodb';

export interface IPatient {
    _id: ObjectId;
    name: string;
    phone: string;
    petName?: string;
    petBirth?: string;
    petType?: PetType;
}

export enum PetType {
    Dog = 'Dog',
    Cat = 'Cat',
    Parrot = 'Parrot',
}

import { IPatient } from 'interfaces/interfaces';

export const filterPatients = (patients: IPatient[], searchTerm: string): IPatient[] => {
    return patients.filter((patient) => patient.name.toLowerCase().includes(searchTerm.toLowerCase()) || (patient.petName && patient.petName.toLowerCase().includes(searchTerm.toLowerCase())));
};

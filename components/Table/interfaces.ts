import { IPatient } from 'interfaces/interfaces';

export interface IPatientTable {
    data: IPatient[];
    handleOpenModal: () => void;
    searchTerm: string;
    onSearchChange: (term: string) => void;
}

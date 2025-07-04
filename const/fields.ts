import { IFormField } from '@/components/UI/Modal/interfaces';
import { PetType } from '../interfaces/interfaces';

export const actionFormFields: IFormField[] = [
    { name: 'name', label: 'Name', type: 'text', required: true },
    {
        name: 'phone',
        label: 'Phone',
        type: 'text',
        required: true,
        pattern: /^0\d{1,2}-\d{7}$/,
        errorMessage: 'Format: 0X-XXXXXXX or 0XX-XXXXXXX (7 digits after hyphen)',
    },
    { name: 'petName', label: 'Pet Name', type: 'text' },
    { name: 'petBirth', label: 'Pet Birth Day', type: 'date' },
    {
        name: 'petType',
        label: 'Pet Type',
        type: 'select',
        options: Object.values(PetType),
    },
];

export const filterableFields = ['name', 'petName'];

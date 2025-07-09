import { ColumnDef } from '@tanstack/react-table';
import { IconButton } from '@mui/material';
import { IPatient } from 'interfaces/interfaces';
import { Edit } from '@/components/UI/Icons/Icons';

export const createPatientColumns = (onEdit: (patient: IPatient) => void): ColumnDef<IPatient>[] => [
    createColumn('Name', 'name', {
        enableSorting: true,
        enableColumnFilter: true,
    }),
    createColumn('Phone', 'phone'),
    createColumn('Pet Name', 'petName', {
        enableSorting: true,
        enableColumnFilter: true,
    }),
    {
        header: 'Pet Age',
        accessorKey: 'petBirth',
        cell: (info) => getPetAge(new Date(String(info.getValue()))),
    },
    {
        header: 'Pet Type',
        accessorKey: 'petType',
        cell: (info) => info.getValue(),
        filterFn: (row, columnId, filterValue) => !filterValue?.length || filterValue.includes(row.getValue(columnId)),
    },
    {
        header: '',
        accessorKey: 'actions',
        cell: ({ row }) => (
            <IconButton tabIndex={4} onClick={() => onEdit(row.original)} onMouseEnter={() => import('@/components/UI/Loaders/ComponentLoader')} aria-label="edit" size="small">
                <Edit />
            </IconButton>
        ),
        enableSorting: false,
    },
];

const getPetAge = (birthDate: Date, today: Date = new Date()): string => {
    if (isNaN(birthDate.getTime()) || birthDate > today) return '';
    const age = Math.floor((today.getTime() - birthDate.getTime()) / (1000 * 60 * 60 * 24 * 365));
    return age < 1 ? '<1' : age.toString();
};

const createColumn = (header: string, accessorKey: string, options: Partial<ColumnDef<IPatient>> = {}): ColumnDef<IPatient> => {
    return {
        header,
        accessorKey,
        cell: (info) => info.getValue(),
        ...options,
    };
};

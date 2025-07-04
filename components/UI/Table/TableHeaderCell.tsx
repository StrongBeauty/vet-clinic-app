'use client';

import { IconButton, TableCell } from '@mui/material';
import { flexRender } from '@tanstack/react-table';
import { Sort, SortDown, SortUp } from '@/components/UI/Icons/Icons';
import { ITableHeaderCell } from '@/components/UI/Table/interfaces';
import CheckBoxSelect from '@/components/UI/Select/CheckBoxSelect';
import { useCallback } from 'react';

const TableHeaderCell = <TData,>({ header, petTypes }: ITableHeaderCell<TData>) => {
    const handleChange = useCallback(
        (value: any) => {
            header.column.setFilterValue(value);
        },
        [header.column],
    );

    return (
        <TableCell key={header.id}>
            <div className="whitespace-nowrap px-4 py-2 text-sm align-middle flex items-center gap-1 font-bold">
                {flexRender(header.column.columnDef.header, header.getContext())}

                {(header.column.id === 'name' || header.column.id === 'petName') && (
                    <span
                        tabIndex={2}
                        onKeyDown={(e) => {
                            if ((e.key === 'Enter' || e.key === ' ') && header.column.getCanSort()) {
                                header.column.toggleSorting();
                                e.preventDefault();
                            }
                        }}
                    >
                        {!header.column.getIsSorted() && (
                            <IconButton size="small" onClick={header.column.getToggleSortingHandler()} title="Sorting" className="!p-0 text-gray-400" disableRipple>
                                <Sort fontSize="small" />
                            </IconButton>
                        )}
                        {header.column.getIsSorted() === 'asc' && (
                            <IconButton size="small" onClick={header.column.getToggleSortingHandler()} className="!p-0 text-blue-500" disableRipple>
                                <SortUp fontSize="small" />
                            </IconButton>
                        )}
                        {header.column.getIsSorted() === 'desc' && (
                            <IconButton size="small" onClick={header.column.getToggleSortingHandler()} className="!p-0 text-blue-500" disableRipple>
                                <SortDown fontSize="small" />
                            </IconButton>
                        )}
                    </span>
                )}
                {header.column.id === 'petType' && petTypes && <CheckBoxSelect options={petTypes} value={(header.column.getFilterValue() as string[]) || []} onChange={handleChange} />}
            </div>
        </TableCell>
    );
};

export default TableHeaderCell;

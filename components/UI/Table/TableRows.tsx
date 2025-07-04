'use client';

import { FC, memo } from 'react';
import { TableRow, TableCell } from '@mui/material';
import { flexRender } from '@tanstack/react-table';
import { ITableRows } from '@/components/UI/Table/interfaces';

const TableRows: FC<ITableRows> = ({ rows }) => {
    return (
        <>
            {rows.map((row) => (
                <TableRow key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                    ))}
                </TableRow>
            ))}
        </>
    );
};

export default memo(TableRows);

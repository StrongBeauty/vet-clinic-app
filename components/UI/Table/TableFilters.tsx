'use client';

import { TableCell, TableRow } from '@mui/material';
import TextFilter from '@/components/UI/Filters/TextFilter';
import { memo } from 'react';
import { ITableFilters } from '@/components/UI/Table/interfaces';
import { filterableFields } from 'const/fields';

const TableFilters = <TData,>({ headerGroup, filterableColumns = filterableFields }: ITableFilters<TData>) => {
    return (
        <TableRow>
            {headerGroup.headers.map((header) => (
                <TableCell key={header.id}>{filterableColumns.includes(header.column.id) && <TextFilter column={header.column} />}</TableCell>
            ))}
        </TableRow>
    );
};

export default memo(TableFilters);

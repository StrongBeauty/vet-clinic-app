'use client';

import { TableCell } from '@mui/material';
import { ITableRowCell } from '@/components/UI/Table/interfaces';
import { FC } from 'react';

const TableRowCell: FC<ITableRowCell> = ({ children, ...props }) => (
    <TableCell
        sx={{
            padding: '8px 16px',
            borderBottom: '1px solid rgba(224, 224, 224, 0.5)',
        }}
        {...props}
    >
        {children}
    </TableCell>
);

export default TableRowCell;

'use client';

import { useMemo, Fragment, FC, memo } from 'react';
import { useReactTable, getCoreRowModel, getFilteredRowModel, getSortedRowModel, ColumnFiltersState, SortingState } from '@tanstack/react-table';
import { Table, TableBody, TableHead, TableRow, TableContainer, Paper } from '@mui/material';
import { useState } from 'react';
import { petTypes } from 'const/common';
import { IPatientTable } from '@/components/Table/interfaces';
import { createPatientColumns } from '@/components/Table/helpers';
import TableHeaderCell from '@/components/UI/Table/TableHeaderCell';
import TableRows from '@/components/UI/Table/TableRows';
import TableFilters from '@/components/UI/Table/TableFilters';

const PatientTable: FC<IPatientTable> = ({ data, handleOpenModal, searchTerm, onSearchChange }) => {
    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

    // table data
    const columns = useMemo(() => createPatientColumns(handleOpenModal), [handleOpenModal]);

    const table = useReactTable({
        data,
        columns,
        state: {
            sorting,
            columnFilters,
            globalFilter: searchTerm,
        },
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        onGlobalFilterChange: onSearchChange,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
    });

    const rowModel = table.getRowModel();
    const headerGroupsData = table.getHeaderGroups();

    const rows = useMemo(() => rowModel.rows, [rowModel]);
    const headerGroups = useMemo(() => headerGroupsData, [headerGroupsData]);

    return (
        <Paper sx={{ p: 2, height: 'calc(100vh - 200px)' }}>
            <TableContainer sx={{ height: '100%' }}>
                <Table stickyHeader aria-label="patient table">
                    <TableHead>
                        {headerGroups.map((headerGroup) => (
                            <Fragment key={headerGroup.id}>
                                <TableRow>
                                    {headerGroup.headers.map((header) => (
                                        <TableHeaderCell key={header.id} header={header} petTypes={petTypes} />
                                    ))}
                                </TableRow>
                                <TableFilters headerGroup={headerGroup} />
                            </Fragment>
                        ))}
                    </TableHead>
                    <TableBody>
                        <TableRows rows={rows} />
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};

export default memo(PatientTable);

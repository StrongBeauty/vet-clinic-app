import { Header, HeaderGroup } from '@tanstack/table-core';
import { ReactNode } from 'react';
import { Row, RowData } from '@tanstack/react-table';

export interface ITableHeaderCell<TData> {
    header: Header<TData, unknown>;
    petTypes?: string[];
}

export interface ITableRowCell {
    children: ReactNode;
}

export interface ITableRows {
    rows: Row<RowData>[];
}

export interface ITableFilters<TData> {
    headerGroup: HeaderGroup<any>;
    filterableColumns?: string[];
}

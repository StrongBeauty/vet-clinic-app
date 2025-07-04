import { Column } from '@tanstack/table-core';

export interface ICheckBoxList<T> {
    options: T[];
    value: T[] | T | null;
    onChange: (value: T[] | T | null) => void;
    onClose?: () => void;
    singleSelect?: boolean;
}

export interface ITextFilter<TData> {
    column: Column<TData>;
}

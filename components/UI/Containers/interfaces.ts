import { ReactNode } from 'react';

export interface IFetchStatus {
    isLoading: boolean;
    error: Error | null;
    children: ReactNode;
}

export interface IDashboardContainer {
    children: ReactNode;
}

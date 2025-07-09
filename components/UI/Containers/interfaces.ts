import { ReactNode } from 'react';

export interface IFetchStatus {
    isLoading: boolean;
    error: Error | null;
}

export interface IDashboardContainer {
    children: ReactNode;
}

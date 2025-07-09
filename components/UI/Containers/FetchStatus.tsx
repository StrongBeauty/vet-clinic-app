'use client';

import { ComponentLoader } from '@/components/UI/Loaders/ComponentLoader';
import { FC, memo } from 'react';
import { IFetchStatus } from '@/components/UI/Containers/interfaces';
import ErrorMessage from '@/components/UI/Errors/ErrorMessage';

const FetchStatus: FC<IFetchStatus> = ({ isLoading, error }) => {
    if (error) {
        return (
            <div className="row-span-2 flex items-center justify-center">
                <ErrorMessage error={error.message} />
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className="row-span-2 flex items-center justify-center">
                <ComponentLoader />
            </div>
        );
    }

    return null;
};

export default memo(FetchStatus);

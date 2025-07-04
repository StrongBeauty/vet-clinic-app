'use client';

import { ComponentLoader } from '@/components/UI/Loaders/ComponentLoader';
import { ErrorMessage } from '@/components/UI/Errors/ErrorMessage';
import { FC, memo } from 'react';
import { IFetchStatus } from '@/components/UI/Containers/interfaces';

const FetchStatus: FC<IFetchStatus> = ({ isLoading, error, children }) => {
    if (error) {
        return <ErrorMessage error={error.message} />;
    }

    if (isLoading) {
        return <ComponentLoader />;
    }

    return <>{children}</>;
};

export default memo(FetchStatus);

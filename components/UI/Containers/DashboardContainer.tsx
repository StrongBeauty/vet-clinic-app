'use client';

import { FC } from 'react';
import { IDashboardContainer } from '@/components/UI/Containers/interfaces';

const DashboardContainer: FC<IDashboardContainer> = ({ children }) => {
    return <div className="grid grid-rows-auto-1fr gap-y-4 p-4 md:p-8 max-w-screen-lg mx-auto">{children}</div>;
};

export default DashboardContainer;

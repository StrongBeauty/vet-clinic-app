'use client';

import { FC } from 'react';
import { IDashboardContainer } from '@/components/UI/Containers/interfaces';

const DashboardContainer: FC<IDashboardContainer> = ({ children }) => {
    return <div className="min-h-screen grid grid-rows-[auto_1fr] gap-4 p-4 md:p-8 max-w-screen-lg mx-auto">{children}</div>;
};

export default DashboardContainer;

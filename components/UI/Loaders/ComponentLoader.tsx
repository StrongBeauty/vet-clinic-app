'use client';

import CircularProgress from '@mui/material/CircularProgress';

export const ComponentLoader = () => {
    return (
        <div className="flex justify-center mt-4">
            <CircularProgress className="text-blue-500" />
        </div>
    );
};

'use client';

import { FC, memo } from 'react';
import { IErrorMessage } from '@/components/UI/Errors/interfaces';
import { Refresh } from '@/components/UI/Icons/Icons';

const ErrorMessage: FC<IErrorMessage> = ({ error }) => {
    return (
        <div className="fixed inset-0 bg-white/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="w-full max-w-2xl bg-white border-2 border-red-200 rounded-xl shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-red-50 to-red-100 p-6 flex items-start">
                    <div className="bg-red-500 rounded-full p-3 mr-4 shadow-lg">
                        <svg className="h-10 w-10 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path
                                fillRule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-red-800 mb-1">Critical Error</h2>
                        <p className="text-red-600 text-lg">{error || "We've encountered an unexpected problem"}</p>
                    </div>
                </div>
                <div className="p-6 bg-white">
                    <p className="text-gray-700 mb-6">Something went wrong. Please try refreshing.</p>
                    <div className="flex gap-4">
                        <button
                            onClick={() => window.location.reload()}
                            className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                        >
                            <Refresh className="h-5 w-5" />
                            Reload Page
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(ErrorMessage);

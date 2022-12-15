import React from 'react';

export const Loding = (loding) => {
    if (loding) {
        return (
            <div className="flex h-[80vh] w-[100%] justify-center items-center">
                <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 rounded-full animate-pulse  bg-amber-500"></div>
                    <div className="w-4 h-4 rounded-full animate-pulse  bg-amber-600"></div>
                    <div className="w-4 h-4 rounded-full animate-pulse  bg-amber-700"></div>
                </div>
            </div>
        );
    }
};


import React from 'react';

const Loading = () => {
    return (
        <div className='min-h-screen flex justify-center'>
            <div class="flex items-center justify-center ">
                <div class="w-24 h-24 border-l-2 border-gray-900 rounded-full animate-spin"></div>
            </div>
        </div>
    );
};

export default Loading;
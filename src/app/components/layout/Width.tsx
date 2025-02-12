import React from 'react';

const Width = ({children}: {children: React.ReactNode}) => {
    return (
        <div className='mx-[200px]'>
            {children}
        </div>
    );
};

export default Width;
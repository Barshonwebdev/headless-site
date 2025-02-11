import React from 'react';

const Width = ({children}: {children: React.ReactNode}) => {
    return (
        <div className='mx-[299px]'>
            {children}
        </div>
    );
};

export default Width;
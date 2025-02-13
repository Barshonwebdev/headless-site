import React from 'react';

const Width = ({children}: {children: React.ReactNode}) => {
    return (
        <div className='md:mx-[200px] mx-4'> 
            {children}
        </div>
    );
};

export default Width;
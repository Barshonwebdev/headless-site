import React from 'react';

const Mobile = ({children}: {children: React.ReactNode}) => {
    return (
        <div className='md:hidden'> 
            {children}
        </div>
    );
};

export default Mobile;
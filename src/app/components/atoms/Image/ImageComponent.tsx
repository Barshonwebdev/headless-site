import Image from 'next/image';
import React from 'react';



const ImageComponent = ({source}) => {
    return (
        <div>
            <Image alt='' src={source}></Image>
        </div>
    );
};

export default ImageComponent;
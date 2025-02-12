import React from 'react';

type button={
    className:string,
    child:string
}
const AllPurposeButton = ({className,child}:button) => {
    return (
        <div>
            <button className={`${className}`}>{child}</button>
        </div>
    );
};

export default AllPurposeButton;
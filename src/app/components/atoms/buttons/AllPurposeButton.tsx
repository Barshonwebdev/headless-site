import React from 'react';

type button={
    className:string,
    child:string
}
const AllPurposeButton = ({className,child}:button) => {
    return (
        <div>
            <button className={`${className} px-8 py-3 rounded`}>{child}</button>
        </div>
    );
};

export default AllPurposeButton;
import React from 'react';

type button={
    text:string,
    bgcolor:string,
    textcolor:string,
    border:string,
    fontweight:string
}
const AllPurposeButton = ({text,bgcolor,textcolor,border,fontweight}:button) => {
    return (
        <div>
            <button className={`${bgcolor} ${fontweight} ${textcolor} ${border} px-8 py-3 rounded`}>{text}</button>
        </div>
    );
};

export default AllPurposeButton;
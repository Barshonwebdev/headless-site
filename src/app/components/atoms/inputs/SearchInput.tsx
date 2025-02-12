import React from 'react';


type inputstring={
    className:string
}
const SearchInput = ({className}:inputstring) => {
    return (
        <div className={`${className}`}>
            <input className='border-0 outline-none' placeholder='Search for the best asset...' type="text" />
        </div>
    );
};

export default SearchInput;
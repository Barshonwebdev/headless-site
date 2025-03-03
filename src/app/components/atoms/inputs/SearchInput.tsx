import React from "react"; 

type Tinputstring = {
  className: string;
};
const SearchInput = ({ className }:Tinputstring) => {
  return (
    <div className={className}>
      <input
        className="border-0 outline-none me-3"
        placeholder="Search for the best asset..."
        type="text"
      />
    </div>
  );
};

export default SearchInput;

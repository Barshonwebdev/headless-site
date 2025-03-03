import React from "react";

type Tinputstring = {
  className: string;
};
const SearchInput = ({ className }: Tinputstring) => {
  return (
    <input
      className={className}
      placeholder="Search for the best asset..."
      type="text"
    />
  );
};

export default SearchInput;

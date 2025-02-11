import React from 'react';
import Text from '../../atoms/texts/Text';
import AllPurposeButton from '../../atoms/buttons/AllPurposeButton';

const Secondheader = () => {
    return (
        <div className='bg-black'>
            <div className="flex items-center justify-between">
        <div className="flex space-x-8 items-center">
          <Text
            className="underline text-sm"
            child="Contributor Account"
          ></Text>
          <AllPurposeButton
            className="font-medium bg-white text-black border-black border-2"
            child="Sign Up"
          ></AllPurposeButton>
        </div>
      </div>
        </div>
    );
};

export default Secondheader;
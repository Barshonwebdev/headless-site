import React from 'react';
import Text from '../../atoms/texts/Text';
import AllPurposeButton from '../../atoms/buttons/AllPurposeButton';
import Width from '../../layout/Width';

const Inspiration = () => {
    return (
        <div className='py-20' style={{backgroundColor:"#E3FFEC"}}>
            <Width>
            <div className="flex justify-between items-center"> 
        <Text
          child="Collect Your Daily Inspiration "
          className="text-black font-bold text-4xl text-center"
        ></Text>
        <AllPurposeButton
          child="Explore collection"
          className="text-sm border-black border p-3 rounded font-semibold"
        ></AllPurposeButton>
      </div>
            </Width>
        </div>
    );
};

export default Inspiration;
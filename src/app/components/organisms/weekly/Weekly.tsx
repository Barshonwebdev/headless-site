import React from 'react';
import Text from '../../atoms/texts/Text';
import AllPurposeButton from '../../atoms/buttons/AllPurposeButton';
import contributorImg1 from '../../../../../public/images/contributor1.svg'
import contributorImg2 from '../../../../../public/images/contributor2.svg'
import contributorImg3 from '../../../../../public/images/contributor3.svg'
import contributorImg4 from '../../../../../public/images/contributor4.svg'
import arrowimg from "../../../../../public/images/arrow.svg";
import ContributorImg from '../../molecules/ContributorImg';
const Weekly = () => {
    return (
        <div className='py-20'>
            <Text
          className="text-3xl lg:text-4xl text-center lg:font-extrabold font-bold mb-10  "
          child="Best Weekly Contributor Assets Only for You"
        ></Text>
        <div className='grid lg:grid-cols-4 grid-cols-2'>
        <ContributorImg
            arrowclass=" w-10"
            arrowimg={arrowimg}
            imgsrc={contributorImg1}
            imgclassname=" "
            nameClassName=''
            nametxtChild='Rajib Ahmed'
          ></ContributorImg>
        <ContributorImg
            arrowclass=" w-10"
            arrowimg={arrowimg}
            imgsrc={contributorImg2}
            imgclassname=" "
            nameClassName=''
            nametxtChild='Abdus Salam'
          ></ContributorImg>
        <ContributorImg
            arrowclass=" w-10"
            arrowimg={arrowimg}
            imgsrc={contributorImg3}
            imgclassname=" "
            nameClassName=''
            nametxtChild='Najnin Kabir'
          ></ContributorImg>
        <ContributorImg
            arrowclass=" w-10"
            arrowimg={arrowimg}
            imgsrc={contributorImg4}
            imgclassname=" "
            nameClassName=''
            nametxtChild='Ibrahim Sattar'
          ></ContributorImg>
        
        
        
        </div>

<div>
          <AllPurposeButton
            className="font-medium flex mx-auto bg-white lg:bg-black text-black lg:text-white border-black border-2 px-10 py-2 mt-10 rounded"
            child="Explore all contributors"
          ></AllPurposeButton>
        </div>
        </div>
    );
};

export default Weekly;
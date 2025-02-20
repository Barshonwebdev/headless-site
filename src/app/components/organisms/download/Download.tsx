import React from 'react';
import Text from '../../atoms/texts/Text';
import ImageComponent from '../../atoms/Image/ImageComponent';
import playstoreimg from '../../../../../public/images/playstore.svg'
import applestoreimg from '../../../../../public/images/applestore.svg'
import mobileimg from '../../../../../public/images/Iphone 12 Max.svg'
import pointingimg from '../../../../../public/images/pointing.svg'
const Download = () => {
    return (
        <div className='bg-[#E7E5FF] my-20 h-[400px] items-center flex  px-[200px] py-[100px] space-x-24 '>
            <div className='space-y-6 items-center '>
                <Text child='Download Our App and Have Access to Digital Art On The Go' className='font-bold text-4xl'></Text>
                <Text child='Carry our digital art library in your pocket with the ImageQuest mobile app - Discover, Download, Create.' className='text-base text-[#3C3C3C]'></Text>
                <div className='flex space-x-6'>
                    <button><ImageComponent className='w-[160px] ' source={playstoreimg}></ImageComponent></button>  
                    <button><ImageComponent className='w-[150px] ' source={applestoreimg}></ImageComponent></button>  
                    <ImageComponent className='w-2/3 top-11 right-6 relative' source={pointingimg}></ImageComponent>
            </div>
                </div>
                

            <div className='w-fit  '>
                <ImageComponent className='' source={mobileimg}></ImageComponent>
            </div>
        </div>
    );
};

export default Download;
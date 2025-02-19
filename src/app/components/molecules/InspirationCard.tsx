import React from 'react';
import ImageComponent from '../atoms/Image/ImageComponent';
import Text from '../atoms/texts/Text';

type inspirationType={
    img1:string,
    img2:string,
    img3:string,
    categoryText:string

}
const InspirationCard = ({img1,img2,img3,categoryText}:inspirationType) => {
    return (
        <div className='flex flex-col gap-2 relative'>
            <ImageComponent className=' ' source={img1}></ImageComponent>
            <div className='flex gap-2'>
            <ImageComponent className=' ' source={img2}></ImageComponent>
            <ImageComponent className=' ' source={img3}></ImageComponent>
            </div>
            <div>
                <Text className='text-base font-bold mt-4' child={categoryText}></Text>
            </div>
            <Text child='60 Assets' className=' text-sm bg-[#202020] inline text-white py-1 px-3 font-thin rounded-sm absolute top-6'></Text>
        </div>
    );
};

export default InspirationCard;
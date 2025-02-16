import React from 'react';
import ImageComponent from '../atoms/Image/ImageComponent';

type exploreImgType={
    imgclassname:string,
    imgsrc:string
}

const ExploreImg = ({imgclassname,imgsrc}:exploreImgType) => {
    return (
        <div>
            <div>
                <ImageComponent className={imgclassname} source={imgsrc}  ></ImageComponent>
            </div>
        </div>
    );
};

export default ExploreImg;
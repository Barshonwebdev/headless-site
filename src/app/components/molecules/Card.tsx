import React from 'react';
import ImageComponent from '../atoms/Image/ImageComponent';
import Text from '../atoms/texts/Text';

type card={
    imageSource:string,
    className:string,
}
const Card = ({imageSource,className}:card) => {
    return (
        <div>
            <ImageComponent className={className} source={imageSource}></ImageComponent>
        </div>
    );
};

export default Card;
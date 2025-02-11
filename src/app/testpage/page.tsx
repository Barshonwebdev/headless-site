import React from 'react';
import ImageComponent from '../components/atoms/Image/ImageComponent';
import logo from "../../../public/images/Logo.svg"

const Test = () => {
    return (
        <div>
            <ImageComponent source={logo}></ImageComponent>
        </div>
    );
};

export default Test;
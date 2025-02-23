import React from "react";
import Width from "../../layout/Width";
import ImageComponent from "../../atoms/Image/ImageComponent";
import designerlogo from "../../../../../public/images/designerlogo.svg";
import bluedash from "../../../../../public/images/bluedash.svg";
import playstorebadge from "../../../../../public/images/playstorebadge.svg";
import applestorebadge from "../../../../../public/images/applestorebadge.svg";
import fbicon from '../../../../../public/images/fb.svg'
import xicon from '../../../../../public/images/x.svg'
import instaicon from '../../../../../public/images/insta.svg'
import Link from "next/link";
const Footer = () => {
  return (
    <div className="bg-black h-[525px]">
      <Width>
        <div className="text-white pt-24 flex justify-between">
          <div className="">
            <ImageComponent
              className="mb-2"
              source={designerlogo}
            ></ImageComponent>
          </div>
          
            {/* content  */}
            <div className="flex space-x-2">
              <ImageComponent className="" source={bluedash}></ImageComponent>
              <div>
                <p className="font-bold mb-5">CONTENT</p>
                <div className="text-gray-400 space-y-3 flex flex-col">
                  <p>
                    <Link href="">Royalty-free creative</Link>
                  </p>
                  <p>
                    <Link href="">Video</Link>
                  </p>
                  <p>
                    <Link href="">Editorial</Link>
                  </p>
                  <p>
                    <Link href="">Custom content</Link>
                  </p>
                  <p>
                    <Link href="">Creative collections</Link>
                  </p>
                  <p>
                    <Link href="">Become a contributor</Link>
                  </p>
                  <p>
                    <Link href="">Gallery</Link>
                  </p>
                </div>
              </div>
            </div>

            {/* legal  */}
            <div className="flex space-x-2">
              <ImageComponent className="" source={bluedash}></ImageComponent>
              <div>
                <p className="font-bold mb-5">LEGAL</p>
                <div className="text-gray-400 space-y-3 flex flex-col">
                  <p>
                    <Link href="">Terms and condition</Link>
                  </p>
                  <p>
                    <Link href="">Copyright information</Link>
                  </p>
                  <p>
                    <Link href="">Privacy policy</Link>
                  </p>
                </div>
              </div>
            </div>

            {/* company  */}
            <div className="flex space-x-2">
              <ImageComponent className="" source={bluedash}></ImageComponent>
              <div>
                <p className="font-bold mb-5">COMPANY</p>
                <div className="text-gray-400 space-y-3 flex flex-col">
                  <p>
                    <Link href="">About us</Link>
                  </p>
                  <p>
                    <Link href="">Careers</Link>
                  </p>
                  <p>
                    <Link href="">Blogs</Link>
                  </p>
                  <p>
                    <Link href="">Customer support</Link>
                  </p>
                </div>
              </div>
            </div>

            {/* get the app  */}
            <div className="flex space-x-2">
              <ImageComponent className="" source={bluedash}></ImageComponent>
              <div className="">
                <p className="font-bold mb-5">GET THE APP</p>
                <div className="flex flex-col">
                <button className="bg-white rounded px-4 py-2 mb-4">
                  <ImageComponent
                    className="w-[120px]"
                    source={playstorebadge}
                  ></ImageComponent>
                </button>
                <button className="bg-white rounded px-4 py-2 mb-10">
                  <ImageComponent
                    className="w-[125px]"
                    source={applestorebadge}
                  ></ImageComponent>
                </button>
                {/* socials  */}
                <div className="flex space-x-3">
                    <button><ImageComponent className="" source={fbicon}></ImageComponent></button>
                    <button><ImageComponent className="" source={xicon}></ImageComponent></button>
                    <button><ImageComponent className="" source={instaicon}></ImageComponent></button>
                </div>
                </div>
              </div>
            </div>
          
        </div>
      </Width>
    </div>
  );
};

export default Footer;

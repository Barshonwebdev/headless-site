import React from "react";
import Width from "../../layout/Width";
import ImageComponent from "../../atoms/Image/ImageComponent";
import designerlogo from "../../../../../public/images/designerlogo.svg";
import bluedash from "../../../../../public/images/bluedash.svg";
import playstorebadge from "../../../../../public/images/playstorebadge.svg";
import applestorebadge from "../../../../../public/images/applestorebadge.svg";
import fbicon from "../../../../../public/images/fb.svg";
import xicon from "../../../../../public/images/x.svg";
import instaicon from "../../../../../public/images/insta.svg";
import sponsors from "../../../../../public/images/sponsors.svg";
import footerbg from "../../../../../public/images/footerbg.svg";
import mobilefooterbg from "../../../../../public/images/mobilefooterbg.svg";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="bg-black lg:h-[600px] h-[940px] relative">
      <Width>
        <div className="text-white lg:pt-24 pt-8 flex flex-wrap lg:flex-nowrap lg:justify-between mb-16 lg:mb-0">
          <div className="lg:me-28 mb-8 lg:mb-0">
            <ImageComponent
              className="mb-2 "
              source={designerlogo}
            ></ImageComponent>
          </div>

          <div className="grid grid-cols-2 gap-y-8 gap-x-2 w-full lg:flex  lg:justify-between">
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
                    <button>
                      <ImageComponent
                        className=""
                        source={fbicon}
                      ></ImageComponent>
                    </button>
                    <button>
                      <ImageComponent
                        className=""
                        source={xicon}
                      ></ImageComponent>
                    </button>
                    <button>
                      <ImageComponent
                        className=""
                        source={instaicon}
                      ></ImageComponent>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Width>
      {/* sponsors  */}
      <div className="lg:mt-8  ">
        <div className=" ">
          <p className="text-gray-300 text-center mb-2">Powered by</p>
          <ImageComponent
            className="mx-auto lg:rounded rounded-sm w-[340px] lg:w-[650px]"
            source={sponsors}
          ></ImageComponent>
        </div>
      </div>

      {/* copyright  */}
      <div className="absolute bottom-0">
        <ImageComponent
          className="hidden lg:block"
          source={footerbg}
        ></ImageComponent>
        <div style={{ backgroundImage: `url(${mobilefooterbg.src})` }}>
          <Width>
            <div className="text-gray-500 text-sm relative flex flex-col lg:flex-row justify-between ">
              <p className="mt-7 lg:absolute lg:bottom-0 text-xs lg:text-base text-center lg:text-left mb-1 lg:mb-0 ">
                © 2024 DESIGN FOR EVERYONE, ALL RIGHTS RESERVED BY ICT DIVISION
              </p>
              <p className="lg:absolute lg:bottom-0 right-0 text-xs lg:text-base text-center lg:text-left mb-7 mt-2 lg:mb-0">
                Technical support by{" "}
                <span className="underline">
                  <Link href="">Headless Technologies Ltd.</Link>
                </span>
              </p>
            </div>
          </Width>
        </div>
      </div>
    </div>
  );
};

export default Footer;

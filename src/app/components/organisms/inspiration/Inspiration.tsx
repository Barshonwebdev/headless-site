import React from "react";
import Text from "../../atoms/texts/Text";
import AllPurposeButton from "../../atoms/buttons/AllPurposeButton";
import Width from "../../layout/Width";
import InspirationCard from "../../molecules/InspirationCard";
import card1img1 from "../../../../../public/images/Inspiration/card 1/img1.svg";
import card1img2 from "../../../../../public/images/Inspiration/card 1/img2.svg";
import card1img3 from "../../../../../public/images/Inspiration/card 1/img3.svg";
import card2img1 from "../../../../../public/images/Inspiration/card 2/img1.svg";
import card2img2 from "../../../../../public/images/Inspiration/card 2/img2.svg";
import card2img3 from "../../../../../public/images/Inspiration/card 2/img3.svg";
import card3img1 from "../../../../../public/images/Inspiration/card 3/img1.svg";
import card3img2 from "../../../../../public/images/Inspiration/card 3/img2.svg";
import card3img3 from "../../../../../public/images/Inspiration/card 3/img3.svg";
import Link from "next/link";
const Inspiration = () => {
  return (
    <div className="py-20" style={{ backgroundColor: "#E3FFEC" }}>
      <Width>
        <div className=" flex justify-center items-center flex-col ">
          <div className="flex flex-col justify-between">
            <div className="flex  justify-center lg:justify-between items-center mb-10">
              <Text
                child="Collect Your Daily Inspiration "
                className="text-black font-bold text-3xl  lg:text-4xl text-center "
              ></Text>
              <AllPurposeButton
                child="Explore collection"
                className="text-sm hidden lg:block border-black border p-3 rounded font-semibold"
              ></AllPurposeButton>
            </div>

            {/* cards  */}
            <div className="flex items-center justify-center flex-col  lg:flex-row gap-7">
              <Link href="">
                <InspirationCard
                  categoryText="Aesthetic"
                  img1={card1img1}
                  img2={card1img2}
                  img3={card1img3}
                ></InspirationCard>
              </Link>
              <Link href="">
                <InspirationCard
                  categoryText="Nature"
                  img1={card2img1}
                  img2={card2img2}
                  img3={card2img3}
                ></InspirationCard>
              </Link>
              <Link href="">
                <InspirationCard
                  categoryText="Miscellaneous"
                  img1={card3img1}
                  img2={card3img2}
                  img3={card3img3}
                ></InspirationCard>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <AllPurposeButton
            child="Explore collection"
            className="text-sm block mx-auto mt-8 md:hidden border-black border py-3 px-5 rounded font-semibold"
          ></AllPurposeButton>
        </div>
      </Width>
    </div>
  );
};

export default Inspiration;

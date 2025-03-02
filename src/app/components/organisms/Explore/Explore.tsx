import React from "react";
import "./explore.css";
import Text from "../../atoms/texts/Text";
import ExploreImg from "../../molecules/ExploreImg";
import img1 from "../../../../../public/images/sky.svg";
import img3 from "../../../../../public/images/digital.svg";
import img4 from "../../../../../public/images/sea.svg";
import img5 from "../../../../../public/images/food.svg";
import img6 from "../../../../../public/images/book.svg";
import img7 from "../../../../../public/images/ball.svg";
import img8 from "../../../../../public/images/galaxy.svg";
import AllPurposeButton from "../../atoms/buttons/AllPurposeButton";
import arrowimg from "../../../../../public/images/arrow.svg";
import premiumimg from "../../../../../public/images/premium.svg";
import bookmarkimg from "../../../../../public/images/bookmark.svg";
const Explore = () => {
  return (
    <div className=" ">
      {/* desktop view  */}
      <div className=" text-black bgcolor py-20">
        <Text
          className="text-4xl text-center font-bold mb-10 top "
          child="Explore A Vast Collection of Digital Art"
        ></Text>
        <div className="grid grid-cols-4">
          <ExploreImg
            arrowclass=" w-10"
            bookmarkclass=" "
            premiumclass=" "
            arrowimg={arrowimg}
            bookmarkimg={bookmarkimg}
            premiumimg={premiumimg}
            textClassName="text-white "
            txtChild="Sky view"
            imgsrc={img1}
            imgclassname="w-full "
          ></ExploreImg>
          <ExploreImg
            arrowclass="w-10 "
            bookmarkclass=" "
            premiumclass=" "
            arrowimg={arrowimg}
            bookmarkimg={bookmarkimg}
            premiumimg={premiumimg}
            textClassName="text-white "
            txtChild="Natural view"
            imgsrc={img8}
            imgclassname="w-full "
          ></ExploreImg>
          <ExploreImg
            arrowclass="w-10 "
            bookmarkclass=" "
            premiumclass=" "
            arrowimg={arrowimg}
            bookmarkimg={bookmarkimg}
            premiumimg={premiumimg}
            textClassName="text-white "
            txtChild="Digital"
            imgsrc={img3}
            imgclassname="w-full "
          ></ExploreImg>
          <ExploreImg
            arrowclass="w-10 "
            bookmarkclass=" "
            premiumclass=" "
            arrowimg={arrowimg}
            bookmarkimg={bookmarkimg}
            premiumimg={premiumimg}
            textClassName="text-white "
            txtChild="Sea view"
            imgsrc={img4}
            imgclassname="w-full "
          ></ExploreImg>
          <ExploreImg
            arrowclass="w-10 "
            bookmarkclass=" "
            premiumclass=" "
            arrowimg={arrowimg}
            bookmarkimg={bookmarkimg}
            premiumimg={premiumimg}
            textClassName="text-white "
            txtChild="Foods"
            imgsrc={img5}
            imgclassname="w-full "
          ></ExploreImg>
          <ExploreImg
            arrowclass="w-10 "
            bookmarkclass=" "
            premiumclass=" "
            arrowimg={arrowimg}
            bookmarkimg={bookmarkimg}
            premiumimg={premiumimg}
            textClassName="text-white "
            txtChild="Books"
            imgsrc={img6}
            imgclassname="w-full "
          ></ExploreImg>
          <ExploreImg
            arrowclass="w-10 "
            bookmarkclass=" "
            premiumclass=" "
            arrowimg={arrowimg}
            bookmarkimg={bookmarkimg}
            premiumimg={premiumimg}
            textClassName="text-white "
            txtChild="Sports"
            imgsrc={img7}
            imgclassname="w-full "
          ></ExploreImg>
          <ExploreImg
            arrowclass="w-10 "
            bookmarkclass=" "
            premiumclass=" "
            arrowimg={arrowimg}
            bookmarkimg={bookmarkimg}
            premiumimg={premiumimg}
            textClassName="text-white "
            txtChild="Astronomy"
            imgsrc={img8}
            imgclassname="w-full "
          ></ExploreImg>
        </div>
        <div> 
          <AllPurposeButton
            className="font-medium flex mx-auto bg-black text-white border-black border-2 px-10 py-2 mt-10 rounded"
            child="Browse more"
          ></AllPurposeButton>
        </div>
      </div>
    </div>
  );
};

export default Explore;

import React from "react";
import Header from "../../organisms/common/Header";
import Width from "../../layout/Width";
import Secondheader from "../../organisms/secondheader/Secondheader";
import Banner from "../../organisms/banner/Banner";
import Trending from "../../organisms/trending/Trending";
import Desktop from "../../layout/Desktop";
import Mobile from "../../layout/Mobile";
import MobileHeader from "../../organisms/MobileHeader/MobileHeader";
import MobileBanner from "../../organisms/banner/MobileBanner";

const Homepage = () => {
  return (
    <div>
      <Desktop><Width>
        <Header></Header>
      </Width>
      <Secondheader></Secondheader></Desktop>
      <Mobile><MobileHeader></MobileHeader></Mobile>
      <Desktop><Banner></Banner></Desktop>
      <Mobile><MobileBanner></MobileBanner></Mobile>
      <Width><Trending></Trending></Width>
    </div>
  );
};

export default Homepage;

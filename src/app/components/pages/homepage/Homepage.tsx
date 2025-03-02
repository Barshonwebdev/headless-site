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
import TrendingMobile from "../../organisms/trending/TrendingMobile";
import Explore from "../../organisms/Explore/Explore";
import ExploreMobile from "../../organisms/Explore/ExploreMobile";
import Smart from "../../organisms/smart/Smart";
import Inspiration from "../../organisms/inspiration/Inspiration";
import Weekly from "../../organisms/weekly/Weekly";
import Download from "../../organisms/download/Download";
import Insight from "../../organisms/insights/Insight";
import BecomeContributor from "../../organisms/becomeContributor/BecomeContributor";
import Footer from "../../organisms/common/Footer";

const Homepage = () => {
  return (
    <div>

      {/* desktop exclusive view */}
      <Desktop>
        <Width>
          <Header></Header>
        </Width>
        <Secondheader></Secondheader>
        <Banner></Banner>
        <Width>
          <Trending></Trending>
        </Width>
        <Explore></Explore>
      </Desktop>

      {/* mobile exclusive view  */}
      <Mobile>
        <MobileHeader></MobileHeader>
        <MobileBanner></MobileBanner>
        <TrendingMobile></TrendingMobile>
        <ExploreMobile></ExploreMobile>
      </Mobile>
      

      {/* common for all views  */}
      <Width>
        <Smart></Smart>
      </Width>
      <Inspiration></Inspiration>
      <Weekly></Weekly>
      <Download></Download>
      <Width>
        <Insight></Insight>
      </Width>
      <Width><BecomeContributor></BecomeContributor></Width>
      <Footer></Footer>
    </div>
  );
};

export default Homepage;

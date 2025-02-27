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
      <Desktop>
        <Width>
          <Header></Header>
        </Width>
        <Secondheader></Secondheader>
      </Desktop>
      <Mobile>
        <MobileHeader></MobileHeader>
      </Mobile>
      <Desktop>
        <Banner></Banner>
      </Desktop>
      <Mobile>
        <MobileBanner></MobileBanner>
      </Mobile>
      <Desktop>
        <Width>
          <Trending></Trending>
        </Width>
      </Desktop>
      <Mobile>
        <TrendingMobile></TrendingMobile>
      </Mobile>
      <Desktop>
        <Explore></Explore>
      </Desktop>
      <Mobile>
        <ExploreMobile></ExploreMobile>
      </Mobile>
      <Width>
        <Smart></Smart>
      </Width>
      <Inspiration></Inspiration>
      <Weekly></Weekly>
      <Download></Download>
      <Width>
        <Insight></Insight>
      </Width>
      <BecomeContributor></BecomeContributor>
      <Footer></Footer>
    </div>
  );
};

export default Homepage;

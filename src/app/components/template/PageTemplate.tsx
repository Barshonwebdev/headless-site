import React from "react";
import Desktop from "../layout/Desktop";
import Width from "../layout/Width";
import Header from "../organisms/common/Header";
import Secondheader from "../organisms/secondheader/Secondheader";
import Banner from "../organisms/banner/Banner";
import Trending from "../organisms/trending/Trending";
import Explore from "../organisms/Explore/Explore";
import Mobile from "../layout/Mobile";
import MobileHeader from "../organisms/MobileHeader/MobileHeader";
import MobileBanner from "../organisms/banner/MobileBanner";
import TrendingMobile from "../organisms/trending/TrendingMobile";
import ExploreMobile from "../organisms/Explore/ExploreMobile";
import Smart from "../organisms/smart/Smart";
import Inspiration from "../organisms/inspiration/Inspiration";
import Weekly from "../organisms/weekly/Weekly";
import Download from "../organisms/download/Download";
import Insight from "../organisms/insights/Insight";
import BecomeContributor from "../organisms/becomeContributor/BecomeContributor";
import Footer from "../organisms/common/Footer";

const PageTemplate = () => {
  return (
    <div>
      {/* desktop exclusive view */}
      <Desktop>
        <Width>
          <Header />
        </Width>
        <Secondheader />
        <Banner />
        <Width>
          <Trending />
        </Width>
        <Explore />
      </Desktop>

      {/* mobile exclusive view  */}
      <Mobile>
        <MobileHeader />
        <MobileBanner />
        <TrendingMobile />
        <ExploreMobile />
      </Mobile>

      {/* common for all views  */}
      <Width>
        <Smart />
      </Width>
      <Inspiration />
      <Weekly />
      <Download />
      <Width>
        <Insight />
      </Width>
      <Width>
        <BecomeContributor />
      </Width>
      <Footer />
    </div>
  );
};

export default PageTemplate;

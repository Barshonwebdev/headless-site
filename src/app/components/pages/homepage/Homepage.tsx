import React from "react";
import Header from "../../organisms/common/Header";
import Width from "../../layout/Width";
import Secondheader from "../../organisms/secondheader/Secondheader";
import Banner from "../../organisms/banner/Banner";
import Trending from "../../organisms/trending/Trending";

const Homepage = () => {
  return (
    <div>
      <Width>
        <Header></Header>
      </Width>
      <Secondheader></Secondheader>
      <Banner></Banner>
      <Width><Trending></Trending></Width>
    </div>
  );
};

export default Homepage;

import React from "react";
import Header from "../../organisms/common/Header";
import Width from "../../layout/Width";
import Secondheader from "../../organisms/secondheader/Secondheader";
import Banner from "../../organisms/banner/Banner";

const Homepage = () => {
  return (
    <div>
      <Width>
        <Header></Header>
      </Width>
      <Secondheader></Secondheader>
      <Banner></Banner>
    </div>
  );
};

export default Homepage;

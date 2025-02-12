import React from "react";
import Header from "../../organisms/common/Header";
import Width from "../../layout/Width";
import Secondheader from "../../organisms/secondheader/Secondheader";

const Homepage = () => {
  return (
    <div>
      <Width>
        <Header></Header>
      </Width>
      <Secondheader></Secondheader>
    </div>
  );
};

export default Homepage;

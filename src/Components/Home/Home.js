import React from "react";
import About from "../About/About";
import Services from "../Services/Services";
import Banner from "../Banner/Banner";
import Contract from "../Contract/Contract";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Contract />
    </div>
  );
};

export default Home;

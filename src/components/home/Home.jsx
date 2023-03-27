import React from "react";
import "./home.scss";
import logo from "../../img/logo.png";
import Footer from "../footer/Footer";

function Home() {
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Jost:wght@300&family=Nunito:wght@200&display=swap');
      </style>
      
      <img className="logo" src={logo} alt="logo" />

      <Footer />
    </>
  );
}

export default Home;

import React from "react";
import "./Home.css";
import NavBar from "../../components/NavBar/NavBar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <div className="home">
      <NavBar />
      <div className="hero">
        <img src={hero_banner} alt="" className="hero-banner" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img" />
          <p>
            It follows Avery Graves as she is blackmailed by terrorists into
            betraying her own country to save her kidnapped husband.
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} alt="" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="" />
              More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Top Rated"} category={"top_rated"} />
        <TitleCards title={"Popular"} category={"popular"} />
        <TitleCards title={"Upcoming"} category={"upcoming"} />
      </div>
      <Footer />
    </div>
  );
}

export default Home;

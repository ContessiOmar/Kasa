import React from "react";
import style from "./About.module.css";
import Collapse from "../../components/Collapse/Collapse";
import datasAbout from "../../datas/aboutUs.json";
import Banner from "../../components/Banner/Banner";
import imgBanner from "../../assets/aboutBanner.png";

function About() {
  return (
    <div className={style.page}>
      <div className={style.divBanner}>
        <Banner imgBanner={imgBanner} texteBanner="" />
      </div>
      {datasAbout.map((about, index) => {
        return (
          <div key={index} className={style.collapse}>
            <Collapse
              collapseTitle={about.title}
              collapseContent={about.content}
            />
          </div>
        );
      })}
    </div>
  );
}

export default About;

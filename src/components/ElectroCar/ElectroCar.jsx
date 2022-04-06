import React from "react";
import "./ElectroCar.css";
import Navbar from "../Navbar/Navbar";
import { CaretDownOutlined } from "antd";
import {
  DownOutlined,
  FacebookOutlined,
  HomeOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const ElectroCar = () => {
  return (
    <div>
      <div className="electro_main">
        <Navbar />
        <div id="home" className="electro_nav">
          <div></div>
          <a
            target="_blank"
            href="https://www.bmw.co.id/en/fastlane/dealer-locator.html"
          >
            <button className="electro_btn">Contact Dealer</button>
          </a>
        </div>
        <h1 className="electro_h1">
          UNLEASH
          <br />
          YOUR <br /> ELECTRIC <br />
          SIDE
        </h1>
      </div>
      <div className="electro_footer">
        <div className="electro_footer_link">
          <a className="linka" href="#model_img">
            Models
            <DownOutlined />
          </a>

          <a className="linka" href="#model2">
            Range-Charging
            <DownOutlined />
          </a>
          <a className="linka" href="#image">
            Design
            <DownOutlined />
          </a>
          <a className="linka" href="#p">
            Technology
            <DownOutlined />
          </a>
          <a className="linka" href="#pp">
            Performance
            <DownOutlined />
          </a>
          <a className="linka" href="#footer">
            Contacts
            <DownOutlined />
          </a>
        </div>
      </div>
      <div className="electro_middle">
        <img
          id="model_img"
          width="150px"
          src="https://www.bmwusa.com/content/dam/bmwusa/global/desktop/BMW_i_Grey-Colour_RGB.png.bmwimg.xlarge.png"
          alt=""
        />
        <h3 className="electro_h3" style={{ color: "gray" }}>
          Going beyond the ideal blend of luxury, technology, and power, BMW i
          delivers more than thrilling <br /> sustainably designed all-electric
          vehicles – it’s about transforming your life with every drive.
        </h3>
      </div>
      <div className="electro_two_main">
        <div className="electro_text">
          <h4 className="electro_h4" style={{ color: "white" }}>
            THE BMW IX AND I4
          </h4>
          <h1 className="electro_h11">
            ELECTRIC VEHICLES FOR ELECTRIFYING ADVENTURES
          </h1>
        </div>
      </div>
      <div className="main_middle_electro">
        <div className="electro_buttons_down">
          <h2>coming soon</h2>
          <h1 style={{ color: "white" }} id="model2">
            THE FIRST-EVER BMW i7
          </h1>
          <p className="electro_p">
            Explore the first-ever all-electric BMW i7 xDrive60 Sedan – designed
            for those who pave their own path forward. With expressive design,
            powerful driving dynamics, the latest technological innovations, and
            an estimated maximum range of ~300 miles, this all-electric
            executive sedan sets a new luxurious standard.
          </p>
        </div>
      </div>

      <video
        width="100%"
        autoPlay
        muted
        loop
        src="https://www.bmw.com/video/is/content/BMW/bmwcom/bmw_com/category/sustainability/oh-god/og-02-media-hd.mp4"
      ></video>
      <div className="electro_img_block1">
        <div className="electro_img_block">
          <img
            id="image"
            className="electro_img_block_img"
            src="https://www.bmwusa.com/content/dam/bmwusa/all-electric-page/ev-superbowl/desktop/BMW-SOC23-i7-PreSOCModule-Desktop.png"
            alt=""
          />
        </div>
      </div>
      <div className="main_three">
        <div className="threeText">
          <div className="text1">
            <p className="text1_title">CRYSTAL HEADLIGHTS</p>
            <p className="text1_p">
              Crafted with the most exclusive crystal glass
            </p>
          </div>
          <div className="text2">
            <p className="text1_title"> INTERACTION BAR</p>
            <p id="p" className="text1_p">
              Functionality, ambient light, and faceted glass décor
            </p>
          </div>
          <div className="text3">
            <p className="text1_title"> THEATER SCREEN</p>
            <p className="text1_p">
              Transform the interior of your i7 Sedan into a private lounge.
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justofyContent: "center",
          }}
        >
          <p className="pb">
            This all-electric luxury executive sedan is arriving soon – and
            you’ll be among the first to know. Sign up today to learn about the
            first-ever BMW i7 xDrive60 Sedan.
          </p>

          <a style={{ margin: " 0 auto" }} href="#footer">
            <button className="bp">STAY INFORMED</button>
          </a>
        </div>
      </div>
      <div className="bp_img"></div>
      <div className="main_three">
        <div className="threeText">
          <div className="text1">
            <p className="text1_title">Go the distance.</p>
            <p className="text1_p">
              With a single charge, you can achieve a range of up to 324 miles.
            </p>
          </div>
          <div className="text2">
            <p className="text1_title">Charge with ease.</p>
            <p id="pp" className="text1_p">
              Charge at home and on the road with total convenience.
            </p>
          </div>
          <div className="text3">
            <p className="text1_title">Full coverage.</p>
            <p className="text1_p">Experience peace of mind.</p>
          </div>
        </div>
      </div>
      <div className="before_footer_main">
        <div className="before_footer">
          <div className="before_footer1">
            <img
              className="before_footer_img"
              src="https://www.bmwusa.com/content/dam/bmwusa/all-electric-page/ev-superbowl/desktop/BMW-SB-EvHub-Performance-01-Desktop.jpg"
              alt=""
            />
          </div>

          <div className="before_footer2">
            <h2 style={{ color: "white" }}>Feel the pure rush.</h2>
            <p className="pp" style={{ color: "white", width: "100%" }}>
              Electric motors, designed and built by BMW, yield powerful
              performance, impressive torque, and exceptional drivability.
              All-electric BMWs have been infused by the same engineering
              expertise that has defined BMW for more than a century.
            </p>
          </div>
        </div>
      </div>
      <div className="main_footer">
        <div className="footer">
          <div className="footer1">
            <h3 style={{ color: "white" }}>Difference</h3>
            <a
              target="_blank"
              className="footera"
              href="https://www.bmw.com/en/footer/mybmw-app.html"
            >
              My BMW App
            </a>
            <a
              target="_blank"
              className="footera"
              href="https://www.bmw.ru/ru/topics/fascination-bmw/individual/bmw-individual.html"
            >
              BMW Individual
            </a>
            <a className="footera" href="#home">
              BMW All-Electric
            </a>
          </div>
          <div className="footer2">
            <h3 style={{ color: "white" }}> Partnerships</h3>
            <a
              target="_blank"
              className="footera"
              href="https://www.caranddriver.com/news/a38539637/performance-driving-school-experience/"
            >
              Perfomance Driving School
            </a>
            <a
              target="_blank"
              className="footera"
              href="https://bmwperformancecenter.com/delivery"
            >
              Perfomance Center Delivery
            </a>
            <a
              target="_blank"
              className="footera"
              href="https://www.motortrend.com/concept-cars/"
            >
              Concept Vehicles
            </a>
          </div>
          <div className="footer3">
            <h3 style={{ color: "white" }}>Speed</h3>
            <a
              target="_blank"
              className="footera"
              href="https://www.bmw-motorsport.com/en/home.html"
            >
              BMW Motosport
            </a>
            <a
              target="_blank"
              className="footera"
              href="https://bmwchampionship.com/"
            >
              BMW Championship
            </a>
            <a
              target="_blank"
              className="footera"
              href="https://www.monticellomotorclub.com/"
            >
              Monticello Motor Club
            </a>
          </div>
          <div className="footer4">
            <h3 style={{ color: "white" }}>Contacts</h3>
            <a className="footera" href="">
              +996709257760
            </a>
            <a className="footera" href="">
              erkin@gmail.com
            </a>
            <a className="footera" href="">
              bekbolsun@gmail.com
            </a>
          </div>
        </div>
        <div className="footer_logo">
          <a target="_blank" href="https://www.instagram.com/bmw/">
            <InstagramOutlined
              style={{
                fontSize: "30px",
                color: "white",
                cursor: "pointer",

                fontWeight: "bold",
              }}
              className="insta"
            />
          </a>
          <a
            target="_blank"
            href="https://twitter.com/BMW?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
          >
            <TwitterOutlined
              className="insta"
              style={{
                fontSize: "30px",
                color: "white",
                cursor: "pointer",

                fontWeight: "bold",
              }}
            />
          </a>
          <a target="_blank" href="https://www.facebook.com/BMW/">
            <FacebookOutlined
              className="insta"
              style={{
                fontSize: "30px",
                color: "white",
                cursor: "pointer",

                fontWeight: "bold",
              }}
            />
          </a>
          <a id="footer" href="#home">
            <HomeOutlined
              className="insta"
              style={{
                fontSize: "30px",
                color: "white",
                cursor: "pointer",

                fontWeight: "bold",
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ElectroCar;

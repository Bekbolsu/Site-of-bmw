import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Card.css";

const Card = () => {
  return (
    <div>
      <div>
        <div className="main-card-container1">
          <Navbar />
          <div className="main-card-containerfirst">
            <div
              className="main-card-container2"
              style={{
                backgroundImage:
                  "url(https://www.bmwusa.com/content/dam/bmwusa/fma/new-secondary-fmas-assets/non-cookied/secondary-fma-1/BMW-HP-X7-Secondary-FMA-Desktop.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "45vh",
                width: "700px",
              }}
            >
              <div className="main-card-p">
                <p>THE 2022 BMW X7</p>
                <p className="main-card2">EXPERIENCE A LEGEND</p>
                <a className="main-card3" href="">
                  Learn More
                </a>
              </div>
            </div>
            <div
              className="main-card-container3"
              style={{
                backgroundImage:
                  "url(https://www.bmwusa.com/content/dam/bmwusa/fma/new-secondary-fmas-assets/non-cookied/secondary-fma-4/BMW-HP-X5-Secondary-FMA-Desktop.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "45vh",
                width: "700px",
              }}
            >
              <div className="main-card-p">
                <p>THE 2022 BMW X5</p>
                <p className="main-card2">LEAD WITH CONFIDENCE</p>
                <a className="main-card3" href="">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="main-card-containersecond">
            <div
              className="main-card-container4"
              style={{
                backgroundImage:
                  "url(https://www.bmwusa.com/content/dam/bmwusa/fma/2021_07/desktop/BMW-MY22-5Series-Homepage-SecondaryFMA-Desktop.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "45vh",
                width: "700px",
              }}
            >
              <div className="main-card-p">
                <p>THE 2022 BMW 5 SERIES SEDAN</p>
                <p className="main-card2">THE 5</p>
                <a className="main-card3" href="">
                  Learn More
                </a>
              </div>
            </div>
            <div
              className="main-card-container5"
              style={{
                backgroundImage:
                  "url(https://www.bmwusa.com/content/dam/bmwusa/fma/2020_06/promobox-8s-gcp/BMW-HP-June-Secondary-FMA-8Series-GC-Desktop.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "45vh",
                width: "700px",
              }}
            >
              <div className="main-card-p">
                <p>POWER AND PRESTIGE</p>
                <p className="main-card2">THE 8</p>
                <a className="main-card3" href="">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* card1 end */}
        {/* card2 start */}
        <div className="main-cardtwo-container1">
          <div className="main-cardtwo-container2">
            <h1 className="main-cardtwo-h">New Cars Of BMW</h1>
          </div>
          <div className="main-cardtwo-container4">
            <div className="main-cardtwo-container3">
              <img
                className="main-cardtwo-image"
                src="https://cache.bmwusa.com/cosy.arox?pov=walkaround&brand=WBBM&vehicle=223O&client=byo&paint=P0C10&fabric=FKCSW&sa=S01T4,S0255,S02TB,S0302,S03MB,S0403,S0430,S0431,S0459,S0465,S0481,S0493,S04KC,S0534,S0544,S05A4,S05AC,S05AV,S0676,S06AC,S06AK,S06C4,S06U2,S0775,S07AC&date=20200627&quality=90&bkgnd=%23f6f6f6&width=600&height=300&w=9800&h=8000&x=180&y=-300&resp=jpg&angle=270"
                alt="mamed"
              />
              <p>3 Series Sedan</p>
            </div>
            <div className="main-cardtwo-container3">
              <img
                className="main-cardtwo-image"
                src="https://cache.bmwusa.com/cosy.arox?pov=walkaround&brand=WBBM&vehicle=22SO&client=byo&paint=P0C1K&fabric=FMAH7&sa=S01RF,S0302,S0319,S0322,S03AG,S03MC,S0420,S0423,S0493,S04MC,S0552,S05AS,S05AV,S0688,S06AC,S06AK,S06C4,S06U3&quality=90&bkgnd=%23f6f6f6&width=600&height=300&w=9800&h=8000&x=180&y=-300&resp=png&angle=270"
                alt="mamed"
              />
              <p>X3</p>
            </div>
            <div className="main-cardtwo-container3">
              <img
                className="main-cardtwo-image"
                src="https://cache.bmwusa.com/cosy.arox?pov=walkaround&brand=WBBM&vehicle=225A&client=byo&paint=P0C2Y&fabric=FKHSW&sa=SS0255,S028S,S02TB,S0302,S0319,S0322,S0346,S03AG,S0403,S0423,S0459,S0465,S0481,S04LF,S04T8,S04UR,S0508,S0534,S0552,S05AC,S05AS,S0676,S06AC,S06AK,S06C4,S06NS,S06U3,S0775&quality=90&bkgnd=%23f6f6f6&width=600&height=300&w=9800&h=8000&x=180&y=-300&resp=jpg&angle=270"
                alt="mamed"
              />
              <p>5 Series Sedan</p>
            </div>
            <div className="main-cardtwo-container3">
              <img
                className="main-cardtwo-image"
                src="https://cache.bmwusa.com/cosy.arox?pov=walkaround&brand=WBBM&vehicle=22XO&client=byo&paint=P0300&fabric=FK8SW&sa=S01CE,S01SB,S0255,S02TB,S0302,S0319,S03AT,S03MB,S0402,S0420,S0423,S0459,S0481,S0494,S04AW,S04KT,S04T8,S04UR,S0552,S05AC,S05AS,S0676,S06AC,S06AK,S06C4,S06U3,S0775,S07HW&quality=90&bkgnd=%23f6f6f6&width=600&height=300&w=9800&h=8000&x=180&y=-300&resp=png&angle=270"
                alt="mamed"
              />
              <p>X5</p>
            </div>
          </div>
        </div>
        {/* card2 end */}
        {/* card3 start */}
        <div className="main-cardthree-container1">
          <video
            className="myVideo"
            loop="loop"
            autoplay="autoplay"
            muted="muted"
          >
            <source
              src="https://rr4---sn-4g5ednsd.googlevideo.com/videoplayback?expire=1649248173&ei=TTNNYsWNLoPO7gSqsaAw&ip=216.131.114.78&id=o-AI7GZdJ45myw7HjMOKu8wXhCMZGvEm4Mw9TWrZuEyOqy&itag=137&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278&source=youtube&requiressl=yes&spc=4ocVC8kN847L0aC4eCYcllkTLkXn&vprv=1&mime=video%2Fmp4&ns=uAV197hR5ph2YsipbvPg1zMG&gir=yes&clen=18949797&dur=77.760&lmt=1574064752577823&keepalive=yes&fexp=24001373,24007246,24162928&c=WEB&txp=5535432&n=jE0c4ThDE71Sbg&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAPV1Qr--uga-Tj6R_xBSU35sR0lHczi3MW0L0Cihvm_qAiAfT7H0B81dTLhyW2Y4CkgwaPRn6MSO-6_U25c6owKslg%3D%3D&rm=sn-4g5ek77e&req_id=2b4abfcd8185a3ee&ipbypass=yes&cm2rm=sn-xaj5u-4g0l7e,sn-n8vdl7r&redirect_counter=3&cms_redirect=yes&cmsv=e&mh=5y&mip=212.42.103.138&mm=34&mn=sn-4g5ednsd&ms=ltu&mt=1649234204&mv=m&mvi=1&pl=25&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAO_rXbM8PcFvkXzbqceTV4ShKvfOnVeqaML7HO8KwomtAiEAlGzrob1etfMs8xDzQpoXMQDH8Dwdidzz0AJx4zMLw_A%3D&ir=1&rr=12"
              type="video/mp4"
            ></source>
          </video>
        </div>
        {/* card3 end */}
        {/* card4 start */}
        <div className="main-cardfour-container1">
          <div className="main-cardfour-container2">
            <h1>Ownership starts here.</h1>
          </div>
          <div className="main-cardfour-container3">
            <div className="main-cardfour-container4">
              <img
                className="main-cardfour-image"
                src="https://www.bmwusa.com/content/dam/bmwusa/homepage/financing/Trade-In-Value_80-px@3x.png.bmwimg.xlarge.png"
                alt=""
              />
              <h6 className="main-card-h61">Trade-In Value</h6>
              <h6 className="main-card-h62"></h6>
            </div>
            <div className="main-cardfour-container4">
              <img
                className="main-cardfour-image"
                src="https://www.bmwusa.com/content/dam/bmwusa/homepage/financing/Credit-Score_80px@3x.png.bmwimg.xlarge.png"
                alt=""
              />
              <h6 className="main-card-h61">Check Your Credit Score</h6>
            </div>
            <div className="main-cardfour-container4">
              <img
                className="main-cardfour-image"
                src="https://www.bmwusa.com/content/dam/bmwusa/homepage/financing/Apply-For-Financing_80-px@3x.png.bmwimg.xlarge.png"
                alt=""
              />
              <h6 className="main-card-h61">Apply for Financing</h6>
            </div>
            <div className="main-cardfour-container4">
              <img
                className="main-cardfour-image"
                src="https://www.bmwusa.com/content/dam/bmwusa/homepage/financing/Stay-Connected_80-px@3x.png.bmwimg.xlarge.png"
                alt=""
              />
              <h6 className="main-card-h61">Stay Connected</h6>
              <h6 className="main-card-h62"></h6>
            </div>
          </div>
        </div>
        {/* card4 end */}
      </div>
    </div>
  );
};

export default Card;

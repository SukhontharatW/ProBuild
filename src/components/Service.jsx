// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import BlackBg from "../images/service-bg-black.png";
import OrangeBg from "../images/service-bg-orange.png";
import ServiceImg from "../images/services/service-1.png";
function Service() {
  return (
    <div className="container">
      <div className="container__main">
        <div className="container__service">
          <h2 className="heading__h2">Our Array of Services</h2>

          <div className="service">
            <div className="service__box service__box--1">
              <div className="service__text">
                <h3 className="heading__h3">Residential Construction</h3>
                <p className="paragraph__inter--normal text__grey">
                  Crafting Comfortable Homes
                </p>
                <Link className="btn btn__primary">LEARN MORE</Link>
              </div>
              <Link className="service__box service__box--2">
                <img src={ServiceImg} alt="" />
              </Link>
            </div>
            <Link className="service__box service__box--3">
              <img src={OrangeBg} alt="" />
              <h3 className="heading__h3 text__black">
                Commercial Construction
              </h3>
              <p className="paragraph__inter--normal text__grey">
                Building Business Success
              </p>
            </Link>
            <Link className="service__box service__box--4">
              <img src={BlackBg} alt="" />
              <h3 className="heading__h3 text__white">Renovation Services</h3>
              <p className="paragraph__inter--normal text__white opacity__max">
                Breathing New Life into Spaces
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;

import { Link } from "react-router-dom";
import Partner1 from "../images/partners/partner-1.svg";
import Partner2 from "../images/partners/partner-2.svg";
import Partner3 from "../images/partners/partner-3.svg";
import Partner4 from "../images/partners/partner-4.svg";
import Partner5 from "../images/partners/partner-5.svg";
function CallToAction() {
  return (
    <div className="container">
      <div className="container__main">
        <div className="container__cta">
          <div className="cta__heading">
            <h3 className="heading__h3">Our Trusted Partners</h3>
            <div className="cta__heading--line"></div>
          </div>
          <div className="cta__box">
            <div className="cta__partner">
              <div className="cta__partner--item">
                <img
                  src={Partner1}
                  alt="partner image"
                  className="cta__partner--item opacity--medium"
                />
              </div>
              <div className="cta__partner--item">
                <img
                  src={Partner2}
                  alt="partner image"
                  className="cta__partner--item opacity--medium"
                />
              </div>
              <div className="cta__partner--item">
                <img
                  src={Partner3}
                  alt="partner image"
                  className="cta__partner--item opacity--medium"
                />
              </div>
              <div className="cta__partner--item">
                <img
                  src={Partner4}
                  alt="partner image"
                  className="cta__partner--item opacity--medium"
                />
              </div>
              <div className="cta__partner--item">
                <img
                  src={Partner5}
                  alt="partner image"
                  className="cta__partner--item opacity--medium"
                />
              </div>
            </div>
            <div className="cta__action">
              <h2 className="heading__h2">
                Let&apos;s embark on this journey together. Get in touch with us
                today!
              </h2>
              <Link className="btn btn__primary">CONTACT US</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;

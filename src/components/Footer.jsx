import { Link } from "react-router-dom";
import LogoWhite from "../images/comany-logo-white.svg";
function Footer() {
  return (
    <div className="container bg__black">
      <div className="container__main">
        <div className="container__footer">
          <div className="footer__top">
            <div className="footer__box footer__box--1">
              <img src={LogoWhite} alt="white logo footer" />
              <div>
                <h6 className="heading__h6 opacity__medium">Follow us on</h6>
                <div className="footer__social">
                  <p className="footer__social--item">ig</p>
                  <p className="footer__social--item">tw</p>
                  <p className="footer__social--item">yt</p>
                  <p className="footer__social--item">ln</p>
                </div>
              </div>
            </div>
            <div className="footer__box footer__box--2">
              <h5 className="heading__h5">Quick Links</h5>
              <ul className="footer__nav">
                <li className="footer__nav--item">
                  <Link className="footer__nav--link heading__h6 opacity__medium">
                    About Us
                  </Link>
                </li>
                <li className="footer__nav--item">
                  <Link className="footer__nav--link heading__h6 opacity__medium">
                    Services
                  </Link>
                </li>
                <li className="footer__nav--item">
                  <Link className="footer__nav--link heading__h6 opacity__medium">
                    Our Projects
                  </Link>
                </li>
                <li className="footer__nav--item">
                  <Link className="footer__nav--link heading__h6 opacity__medium">
                    Blogs
                  </Link>
                </li>
                <li className="footer__nav--item">
                  <Link className="footer__nav--link heading__h6 opacity__medium">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer__box footer__box--3">
              <h5 className="heading__h5">Information</h5>
              <ul className="footer__nav">
                <li className="footer__nav--item">
                  <Link className="footer__nav--link heading__h6 opacity__medium">
                    Support
                  </Link>
                </li>
                <li className="footer__nav--item">
                  <Link className="footer__nav--link heading__h6 opacity__medium">
                    Privacy Policy
                  </Link>
                </li>
                <li className="footer__nav--item">
                  <Link className="footer__nav--link heading__h6 opacity__medium">
                    Terms of Service
                  </Link>
                </li>
                <li className="footer__nav--item">
                  <Link className="footer__nav--link heading__h6 opacity__medium">
                    Cookies Policy
                  </Link>
                </li>
                <li className="footer__nav--item">
                  <Link className="footer__nav--link heading__h6 opacity__medium">
                    Data Protection
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer__box footer__box--4">
              <h5 className="heading__h5">
                Stay updated with the latest at ProBuild. Subscribe to our
                newsletter for project updates, industry insights, and more!
              </h5>
              <div className="footer__cta">
                <input
                  type="text"
                  className="footer__cta-email paragraph__inter--normal text__grey"
                  placeholder="Email address"
                />
                <a className="btn btn__primary">SUBSCRIBE</a>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <h6 className="heading__h6 align__center">
              © 2023 ProBuild. Constructing Excellence Together.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

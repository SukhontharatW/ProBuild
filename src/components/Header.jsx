/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import LogoImg from "../images/company-logo-black.svg";
import PhoneIcon from "../images/icon-phone.svg";
import PinIcon from "../images/icon-pin.svg";
import { useEffect, useState } from "react";
import LogoImgWhite from "../images/comany-logo-white.svg";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [color, setColor] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      // console.log(position);
      if (position >= 70) {
        setColor(true);
      } else {
        setColor(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <>
      <div className="container__banner">
        <div className="banner">
          <div className="banner__contact">
            <div className="banner__contact--phone paragraph__poppins--12">
              <img src={PhoneIcon} alt="" />
              <p>Call Us +123 456 7890</p>
            </div>
            <div className="banner__contact--address paragraph__poppins--12">
              <img src={PinIcon} alt="" />
              <p>123 Anywhere St. Anycity</p>
            </div>
          </div>
          <div className="banner__social">
            <div className="banner__social--item paragraph__poppins--7">ig</div>
            <div className="banner__social--item paragraph__poppins--7">tw</div>
            <div className="banner__social--item paragraph__poppins--7">yt</div>
            <div className="banner__social--item paragraph__poppins--7">ln</div>
          </div>
        </div>
      </div>

      <div
        className={color ? "container__nav container__bg" : "container__nav"}
      >
        <div className="navbar">
          <Link>
            <img src={LogoImg} alt="" className="navbar__logo " />
          </Link>
          <nav className="navbar__right">
            <ul className="navbar__nav">
              <li className="navbar__nav--item">
                <Link
                  className="navbar__nav--link paragraph__inter--normal"
                  onClick={closeMenu}
                >
                  About Us
                </Link>
              </li>
              <li className="navbar__nav--item">
                <Link
                  className="navbar__nav--link paragraph__inter--normal"
                  onClick={closeMenu}
                >
                  Pages
                </Link>
              </li>
              <li className="navbar__nav--item">
                <Link
                  className="navbar__nav--link paragraph__inter--normal"
                  onClick={closeMenu}
                >
                  Our Projects
                </Link>
              </li>
              <li className="navbar__nav--item">
                <Link
                  className="navbar__nav--link paragraph__inter--normal"
                  onClick={closeMenu}
                >
                  Blog
                </Link>
              </li>
              <li className="navbar__nav--item">
                <Link
                  className="navbar__nav--link paragraph__inter--normal"
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <Link className="btn btn__primary">GET IN TOUCH</Link>
          </nav>
        </div>
        <div className="hamburger" onClick={handleClick}>
          {click ? <FaTimes size={26} /> : <FaBars size={26} />}
        </div>
        <nav className={click ? "dropdown__menu active" : "dropdown__menu"}>
          <ul className="navbar__nav">
            <li className="navbar__nav--item">
              <Link
                className="navbar__nav--link paragraph__inter--normal"
                onClick={closeMenu}
              >
                About Us
              </Link>
            </li>
            <li className="navbar__nav--item">
              <Link
                className="navbar__nav--link paragraph__inter--normal"
                onClick={closeMenu}
              >
                Pages
              </Link>
            </li>
            <li className="navbar__nav--item">
              <Link
                className="navbar__nav--link paragraph__inter--normal"
                onClick={closeMenu}
              >
                Our Projects
              </Link>
            </li>
            <li className="navbar__nav--item">
              <Link
                className="navbar__nav--link paragraph__inter--normal"
                onClick={closeMenu}
              >
                Blog
              </Link>
            </li>
            <li className="navbar__nav--item">
              <Link
                className="navbar__nav--link paragraph__inter--normal"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
          <Link className="btn btn__primary">GET IN TOUCH</Link>
        </nav>
      </div>
    </>
  );
}

export default Header;

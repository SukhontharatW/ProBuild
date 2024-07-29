import { Link } from "react-router-dom";
import AboutImg from "../images/about.png";
function About() {
  return (
    <div className="container bg__yellow-white">
      <div className="container__main ">
        <div className="container__about">
          <div className="about__image">
            <img src={AboutImg} alt="" />
          </div>
          <div className="about__text">
            <h2 className="heading__h2">Meet ProBuild</h2>
            <p className="paragraph__inter--normal text__grey">
              At ProBuild, we intertwine our passion for construction with
              innovative solutions to deliver exceptional results, cultivating a
              legacy of excellence that resonates through every project we
              undertake. With over 20 years in the industry. <br />
              <br />
              We proudly stand on our rich history, drawing strength from our
              past achievements, while eagerly embracing the opportunities that
              lie ahead, propelling us towards a future where our dedication to
              craftsmanship and forward-thinking continues to set new benchmarks
              in the world of construction.
            </p>
            <Link className="btn btn__secondary">READ MORE</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

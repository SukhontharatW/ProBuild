import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container bg__hero">
      <div className="container__main">
        <div className="container__hero">
          <div className="hero__text">
            <h1 className="heading__h1">Turning Blueprints into Landmarks</h1>
            <p className="paragraph__inter--normal">
              Our expertise lies in the art and science of bringing blueprints
              to life. We blend the dynamism of innovation, the accuracy of
              precision, and a deep respect for time-honored craftsmanship in
              each project we undertake.
            </p>
            <div className="hero__btn">
              <Link className="btn btn__primary">EXPLORE PROJECTS</Link>
              <Link className="btn btn__secondary">CONSULT NOW</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;

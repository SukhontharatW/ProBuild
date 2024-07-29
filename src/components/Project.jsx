import { Link } from "react-router-dom";
import { PROJECT_DATA } from "./ProjectData";
// import { GoArrowRight } from "react-icons/go";
import arrow from "../images/arrow-white-right.svg";
function Project() {
  // PROJECT_DATA.map((item) => console.log(item[0]));

  return (
    <div className="container">
      <div className="container__main">
        <div className="container__project">
          <div>
            <h2 className="heading__h2">Concrete Testaments to Our Craft</h2>
            <ul className="project__group text__grey paragraph__inter--normal">
              <li className="project__group--item">
                <Link className="project__group--link">ALL</Link>
              </li>
              <span>/</span>
              <li className="project__group--item">
                <Link className="project__group--link">Residential</Link>
              </li>
              <span>/</span>
              <li className="project__group--item">
                <Link className="project__group--link">Commercial</Link>
              </li>
              <span>/</span>
              <li className="project__group--item">
                <Link className="project__group--link">Renovation</Link>
              </li>
            </ul>
          </div>
          <div className="project__item">
            {PROJECT_DATA.map((item) => (
              <ProjectItem item={item[0]} key={item[0].id} />
            ))}
          </div>
          <Link className="btn btn__primary">VIEW MORE</Link>
        </div>
      </div>
    </div>
  );
}
function ProjectItem({ item }) {
  const { img, name, description } = item;
  // console.log(img, name, description);
  return (
    <div className="project__card">
      <img src={img} alt="project image" />
      <h3 className="heading__h3">{name}</h3>
      <p className="paragraph__inter--normal text__grey">{description}</p>
      <Link className="btn btn__find">
        FIND OUT MORE
        <span className="project__arrow-right">
          <img src={arrow} alt="" />
        </span>
      </Link>
    </div>
  );
}
export default Project;

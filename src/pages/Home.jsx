/* eslint-disable no-unused-vars */
import Project from "../components/Project";
import Testimonial from "../components/Testimonial";
import About from "../components/About";
import CallToAction from "../components/CallToAction";
import Hero from "../components/Hero";
import Service from "../components/Service";

function Home() {
  return (
    <>
      <Hero />
      <Service />
      <About />
      <Project />
      <Testimonial />
      <CallToAction />
    </>
  );
}

export default Home;

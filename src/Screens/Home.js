import React from "react";
import img1 from "../Images/MyImg.jpg";
import { useState } from "react";
import { useEffect } from "react";
import Loading from "../Components/Loading";
import Page from "../Components/Page";
import About from "./About";
import MyProjects from "./Projects";
import Experience from "./Experience";
import Gallery from "./Gallery";
import Contact from "./Contact";
const Home = () => {
  const [load, setload] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setload(false);
    }, 2000);
  }, []);
  return load ? (
    <Loading />
  ) : (
    <>
      <Page
        title="Hi, my name is Adnan Shah Muzavor."
        content="I am a web developer who is enthusiatic about learning new skills and exploring new trends in technologies.I aspire to learn from all the opportinities I get to hone my skills and get better as I grow in this exciting generation of technology."
        img={img1}
        btn="About Me"
        btn2="My projects"
        btnurl="/"
      />
      <About />
      <MyProjects />
      {/* <Services/> */}
      <Experience />
      <Gallery home={true} />
      <Contact />
      {/* <Carousel /> */}
    </>
  );
};
export default Home;

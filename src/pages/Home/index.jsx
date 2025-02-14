import React, { useRef } from "react";
import { styled } from "@mui/material/styles";
import NavBar from "../../components/NavBar/NavBar";
import Hero from "./sections/Hero/Hero";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import About from "./sections/SobreMim";
import Whatz from "../../components/WhatsApp";
import Git from "../../components/github";

const StyledContainer = styled("div")(({ theme }) => ({
  backgroundColor: "#0B0A1A",
  minHeight: "100vh",
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(2),
  },
}));



const SectionWrapper = styled("div")(({ theme }) => ({
  marginBottom: theme.spacing(10),
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(25),
  },
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(20),
  },
}));

const SectionWrapperMin = styled("div")(({ theme }) => ({
  marginBottom: theme.spacing(20),
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(0),
  },
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(0),
  },
}));

const WrapperSkills = styled("div")(({ theme }) => ({
  marginBottom: theme.spacing(10),
  position: 'relative',
  zIndex: 10,
}));


const Home = () => {
  const carrosselRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);

  const scrollToCarrossel = () => {
    if (carrosselRef.current) {
      carrosselRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSkills = () => {
    if (skillsRef.current) {
      skillsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <StyledContainer>
      <SectionWrapper>
        <NavBar
          scrollToCarrossel={scrollToCarrossel}
          scrollToAbout={scrollToAbout}
          scrollToSkills={scrollToSkills}
        />
      </SectionWrapper>
      <SectionWrapper>
        <Hero />
      </SectionWrapper>
      <SectionWrapper ref={aboutRef}>
        <About />
      </SectionWrapper>
      <SectionWrapperMin ref={skillsRef}>
        <WrapperSkills>
          <Skills />
        </WrapperSkills>
      </SectionWrapperMin>
      <Whatz />
      <Git />
      <Projects />
    </StyledContainer>
  );
};

export default Home;
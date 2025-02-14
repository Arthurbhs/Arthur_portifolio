import React, { useRef } from "react";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Hero from "./sections/Hero/Hero";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import About from "./sections/SobreMim";
import Whatz from "../../components/WhatsApp";
import Footer from "../../components/Footer"; 
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

const SectionWrapperMax = styled("div")(({ theme }) => ({
  marginBottom: theme.spacing(45),
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(0),
  },
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(60),
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

const StyledLinkWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "100px",
  
}));

const StyledLink = styled(Link)(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.primary.main,
  textDecoration: "none",
  fontWeight: "bold",
  width: "300px",
  padding: theme.spacing(2),
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: theme.shape.borderRadius,
  transition: "background-color 0.3s, color 0.3s",
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.background.paper,
  },
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
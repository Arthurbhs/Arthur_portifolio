import React, { useRef } from "react";
import { styled } from "@mui/material/styles";
import NavBar from "../../components/NavBar/NavBar";
import Carrossel from "./sections/Cassorrel";
import Hero from "./sections/Hero/Hero";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import About from "./sections/SobreMim";
import Whatz from "../../components/WhatsApp";
import Footer from "../../components/Footer"; 
import Git from "../../components/github"

const StyledContainer = styled("div")(({ theme }) => ({
  backgroundColor: "#0B0A1A",
  minHeight: "100vh",
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',  // Certifique-se de que os itens sejam empilhados verticalmente
  justifyContent: 'space-between', // Para garantir que o rodapé fique no final
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
    marginBottom: theme.spacing(10),
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(-30),
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(-40),
    },
  }));

  const WrapperSkills = styled("div")(({ theme }) => ({
    marginBottom: theme.spacing(10),
    position: 'relative', // Torna o elemento posicionado para aplicar o z-index
    zIndex: 10,  // Define um valor alto para o z-index
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
      <SectionWrapperMin ref={carrosselRef}>
        <Carrossel />
      </SectionWrapperMin>
      <SectionWrapperMax>
        <Projects />
      </SectionWrapperMax>
      <Whatz />
      <Git/>
    
      <Footer /> 
     
    </StyledContainer>
  );
};

export default Home;

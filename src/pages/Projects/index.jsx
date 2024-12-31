import React from "react";
import { useTheme, styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import Hero from "./sections/Hero";
import SiteCarrossel from "./sections/SiteCassorrel";
import CandyCarrossel from "./sections/CandyCarrossel";
import SeguroCarrossel from "./sections/Asseguro";
import FoodCarrossel from "./sections/foodCarrossel";
import SeguroVideo from "./sections/SeguroVideosCarrossel"
import AnimaCarrossel from "./sections/AnimaçãoCarrossel"
import TubeCarrossel from "./sections/yoybeCarrossel"
import Title from "../../components/Title";
import Whatz from "../../components/WhatsApp";
import Footer from "../../components/Footer"; 
import Git from "../../components/github";

const StyledContainer = styled("div")(({ theme }) => ({
  backgroundColor: "#0B0A1A",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(2),
  },
}));

const CenteredTypography = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem", // Define o tamanho da fonte
  fontWeight: "normal", // Define o peso da fonte
  color: theme.palette.secondary.main, // Usa a cor secundária do tema
  textAlign: "center", // Centraliza o texto
  margin: "10px",
  display: "flex", // Para centralizar no eixo principal
  justifyContent: "center", // Centraliza horizontalmente
  alignItems: "center", // Centraliza verticalmente
}));

const SectionWrapper = styled("div")(({ theme }) => ({
  marginBottom: theme.spacing(8), // Ajuste o espaçamento aqui
  [theme.breakpoints.down("md")]: {
    marginBottom: theme.spacing(6), // Menor espaçamento em telas médias
  },
  [theme.breakpoints.down("sm")]: {
    marginBottom: theme.spacing(4), // Menor espaçamento em telas pequenas
  },
}));

const Project = () => {
  const theme = useTheme(); // Agora está dentro do componente funcional

  return (

    <StyledContainer>
      <Whatz/>
      <Git/>
      <SectionWrapper>
        <Hero />
        <Title title="Sites em React" />
        <CenteredTypography>
   Criação de websites utilizando a linguagem de programação React e a biblioteca Material UI
        </CenteredTypography>
        <SiteCarrossel />

        <Title title="Edição de video" />
        <CenteredTypography>
   Criação e edição de videos para marcketin, aulas em curso e afins. Separamos trechos de alguns de nossos trabalhos para você.
        </CenteredTypography>
        <SeguroVideo/>
        <TubeCarrossel/>
        <AnimaCarrossel/>
        <Title title="Imagens promocionais" />
        <CenteredTypography>
   Criação e edição de imagens para marcketin, anuncios e afins. sseparamos alguns banner como exemplo
        </CenteredTypography>
        <CandyCarrossel />
        <SeguroCarrossel />
        <FoodCarrossel />
       
      </SectionWrapper>
      <Footer/>
    </StyledContainer>
  );
};

export default Project;

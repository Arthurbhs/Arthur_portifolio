import React from "react";
import { styled } from "@mui/material/styles";
import { Typography,Box } from "@mui/material";
import Hero from "../../../Projects/sections/Hero";
import SiteCarrossel from "../../../Projects/sections/SiteCassorrel";
import CandyCarrossel from "../../../Projects/sections/CandyCarrossel";
import SeguroCarrossel from "../../../Projects/sections/Asseguro";
import FoodCarrossel from "../../../Projects/sections/foodCarrossel";
import SeguroVideo from "../../../Projects/sections/SeguroVideosCarrossel";
import AnimaCarrossel from "../../../Projects/sections/AnimaçãoCarrossel";
import TubeCarrossel from "../../../Projects/sections/yoybeCarrossel";
import Title from "../../../../components/Title";
import Whatz from "../../../../components/WhatsApp";
import Footer from "../../../../components/Footer";
import Git from "../../../../components/github";

const StyledContainer = styled("div")(({ theme }) => ({
  backgroundColor: "#0B0A1A",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(2),
  },
}));

const CenteredTypography = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  fontWeight: "normal",
  color: theme.palette.secondary.main,
  textAlign: "center",
  margin: theme.spacing(2, 0),
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.2rem",
  },
}));

const SectionWrapper = styled("div")(({ theme }) => ({
  marginBottom: theme.spacing(8),
  [theme.breakpoints.down("md")]: {
    marginBottom: theme.spacing(6),
  },
  [theme.breakpoints.down("sm")]: {
    marginBottom: theme.spacing(4),
  },
}));

const Project = () => {
  return (
    <Box>
    <StyledContainer>
      <Whatz />
      <Git />
      <SectionWrapper>
        <Hero />
        <Title title="Sites em React" />
        <CenteredTypography>
          Criação de websites utilizando a linguagem de programação React e a biblioteca Material UI
        </CenteredTypography>
        <SiteCarrossel />

        <Title title="Edição de vídeo" />
        <CenteredTypography>
          Criação e edição de vídeos para marketing, aulas em curso e afins. Separamos trechos de alguns de nossos trabalhos para você.
        </CenteredTypography>
        <SeguroVideo />
        <TubeCarrossel />
        <AnimaCarrossel />

        <Title title="Imagens promocionais" />
        <CenteredTypography>
          Criação e edição de imagens para marketing, anúncios e afins. Separamos alguns banners como exemplo.
        </CenteredTypography>
        <CandyCarrossel />
        <SeguroCarrossel />
        <FoodCarrossel />
      </SectionWrapper>
      
    </StyledContainer>
    <Footer />
    </Box>
  );
};

export default Project;

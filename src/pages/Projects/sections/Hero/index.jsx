import React from "react";
import { Typography, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import Servico from "../../../../assets/images/serviços.png"

const StyledContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(8, 2),
  backgroundColor: "#0B0A1A",
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  textAlign: "center",
}));



const Description = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  color: theme.palette.secondary.main,
  marginBottom: theme.spacing(2),
  lineHeight: 1.6,
}));

const PortfolioSection = () => {
  return (
    <StyledContainer>
       <Typography variant="h4" color="primary" mb={4}   sx={{ 
          fontFamily: "'VT323', monospace", 
          letterSpacing: 2, // separando um pouco as letras
          textShadow: '0 0 5px rgba(0, 255, 42, 0.7), 0 0 10px rgba(0, 255, 42, 0.7), 0 0 15px rgba(0, 255, 42, 0.7)', // efeito neon
          fontSize: '3.5rem', // aumente o tamanho da fonte
        }}
        >Portfólio</Typography >
      <Description sx={{fontSize: '1.5rem'}}>
        Bem-vindo ao nosso portfólio! Aqui você encontra projetos inovadores em
        desenvolvimento web e marketing digital. Nosso objetivo é criar soluções
        criativas e eficazes que destacam marcas no ambiente digital, unindo
        design atraente e tecnologia de ponta.
        Trazemos um catalgo variado de projetos ja feitos com diversos serviços, tais como edição de video,
        criação de banners, artes digitais, animações 2d e criação de websites.
      </Description>
      <img 
          src={Servico}
          alt="Portfólio" 
          style={{  borderRadius: "8px", marginTop: "20px", width: "500px"}}
        />
    </StyledContainer>
  );
};

export default PortfolioSection;

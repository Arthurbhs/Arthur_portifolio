import React from "react";
import { Typography, Container, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import Servico from "../../../../assets/images/serviços.png";

const StyledContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(8, 2),
  backgroundColor: "#0B0A1A",
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(4, 1), // Reduz o padding em telas menores
  },
}));

const Description = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  color: theme.palette.secondary.main,
  marginBottom: theme.spacing(2),
  lineHeight: 1.6,
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.2rem", // Reduz o tamanho da fonte em telas menores
  },
}));

const PortfolioSection = () => {

  return (
    <StyledContainer>
     <Typography variant="h4" color="primary" mb={4} sx={{ fontFamily: "'Awami Nastaliq', serif",
            letterSpacing: 2,
            fontSize: "2.5rem",
            color: '#0B0A1A',
          fontWeight: 'bold',
          WebkitTextStroke: '1.5px rgb(30, 247, 1)', 
        }}>
        PORTIFÓLIO
      </Typography>
      <Description>
        Bem-vindo ao nosso portfólio! Aqui você encontra projetos inovadores em
        desenvolvimento web e marketing digital. Nosso objetivo é criar soluções
        criativas e eficazes que destacam marcas no ambiente digital, unindo
        design atraente e tecnologia de ponta.
        Trazemos um catálogo variado de projetos já feitos com diversos serviços,
        tais como edição de vídeo, criação de banners, artes digitais, animações 2D
        e criação de websites.
      </Description>
      <img
        src={Servico}
        alt="Portfólio"
        style={{
          borderRadius: "8px",
          marginTop: "20px",
          width: "100%", // Garante que a imagem se ajuste à tela
          maxWidth: "500px", // Mantém um limite de largura
        }}
      />
    </StyledContainer>
  );
};

export default PortfolioSection;

import React from "react";
import { Box, Typography, Grid, styled, useTheme, useMediaQuery } from "@mui/material";
import CV from "../../../../assets/Archives/Arthur_Barbosa_CV.pdf";
import BackgroundImage from "../../../../assets/images/background1.png";
import AboutMeImage from "../../../../assets/images/SobreMim.png"; // Adicione a imagem do título

const StyledHero = styled("div")(({ theme }) => ({
  backgroundImage: `url(${BackgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(2),
}));

const StyledBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(7),
  backgroundColor: "rgb(11, 10, 26)",
  width: "100%",
  height: "100%",
  margin: "-18px",
}));

const AboutMe = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <StyledHero>
      <Box mb={2} textAlign="center">
        <img 
          src={AboutMeImage} 
          alt="Sobre Mim" 
          style={{ width: "100%", maxWidth: isSmallScreen ? "300px" : "600px" }}
        />
      </Box>
      <StyledBox>
        <Typography variant="body1" color="secondary" paragraph sx={{ padding: "10px", textAlign: "justify" }}>
          Olá, seja bem-vindo ao meu portfólio profissional! Meu nome é Arthur Barbosa, sou um jovem de 20 anos e atualmente estou cursando a faculdade de Análise e Desenvolvimento de Sistemas. Neste espaço, pretendo fazer uma breve apresentação sobre mim e sobre o que faço.
          Desde pequeno, tenho uma paixão por escrever histórias, desenhar e até mesmo criar minhas próprias animações, sempre me interessando em desenvolver coisas novas. Com o tempo, fui estudando sobre a área de Tecnologia da Informação e, hoje, além de trabalhar com soluções de marketing digital, também atuo como desenvolvedor, criando websites sozinho como freelancer.
          Sou uma pessoa criativa, apaixonada por criar designs e desenvolver projetos. Tenho a capacidade de trabalhar como desenvolvedor full stack, mas minha preferência está voltada para o front-end. Estou disposto a viajar a trabalho e tenho facilidade em me adaptar a novos ambientes.
          Sou, por natureza, uma pessoa introvertida, com foco em realizar meus projetos. No entanto, isso não me impede de me socializar; possuo um bom convívio com todos ao meu redor e estou sempre apto a ajudar. Para saber mais sobre minha formação e experiência profissional
          <a href={CV} download style={{ color: 'inherit', textDecoration: 'none' }}>
            <strong> veja meu currículo</strong>
          </a>.
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" color="secondary" sx={{ padding: "10px" }}>
              <Typography variant="body2" color="primary"><strong>Data de Nascimento:</strong></Typography> 24/06/2004
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" color="secondary" sx={{ padding: "10px" }}>
              <Typography variant="body2" color="primary"><strong>Nacionalidade:</strong></Typography> Brasileiro
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" color="secondary" sx={{ padding: "10px" }}>
              <Typography variant="body2" color="primary"><strong>Objetivo Profissional:</strong></Typography> Adquirir meu primeiro emprego na área de Desenvolvimento Web
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" color="secondary" sx={{ padding: "10px" }}>
              <Typography variant="body2" color="primary"><strong>Sonho Profissional:</strong></Typography> Ser contratado como senior em UX Designer
            </Typography>
          </Grid>
        </Grid>
      </StyledBox>
    </StyledHero>
  );
};

export default AboutMe;

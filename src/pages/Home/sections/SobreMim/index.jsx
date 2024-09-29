import React from "react";
import { Box, Typography, Grid, styled } from "@mui/material";
import CV from "../../../../assets/Archives/Arthur_Barbosa_CV.pdf"

// Estilizando a Box com bordas
const StyledBox = styled(Box)(({ theme }) => ({
  border: `2px solid ${theme.palette.secondary.main}`, // Borda na cor secundária
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  backgroundColor: "#0B0A1A", // Cor de fundo
}));

const AboutMe = () => {
  return (
    <StyledBox>
      <Typography variant="h4" color="primary" gutterBottom> {/* Título na cor secundária */}
        Sobre Mim
      </Typography>
      <Typography variant="body1" color="secondary" paragraph> {/* Texto descritivo na cor secundária */}
      Olá, seja bem-vindo ao meu portfólio profissional! Meu nome é Arthur Barbosa, sou um jovem de 20 anos e atualmente estou cursando a faculdade de Análise e Desenvolvimento de Sistemas. Neste espaço, pretendo fazer uma breve apresentação sobre mim e sobre o que faço.
Desde pequeno, tenho uma paixão por escrever histórias, desenhar e até mesmo criar minhas próprias animações, sempre me interessando em desenvolver coisas novas. Com o tempo, fui estudando sobre a área de Tecnologia da Informação e, hoje, além de trabalhar com soluções de marketing digital, também atuo como desenvolvedor, criando websites sozinho como freelancer.
Sou uma pessoa criativa, apaixonada por criar designs e desenvolver projetos. Tenho a capacidade de trabalhar como desenvolvedor full stack, mas minha preferência está voltada para o front-end. Estou disposto a viajar a trabalho e tenho facilidade em me adaptar a novos ambientes.
Sou, por natureza, uma pessoa introvertida, com foco em realizar meus projetos. No entanto, isso não me impede de me socializar; possuo um bom convívio com todos ao meu redor e estou sempre apto a ajudar. Para saber mais sobre minha formação e experiência profissional
<a href={CV} download style={{ color: 'inherit', textDecoration: 'none' }}>
          <strong> veja meu currículo</strong>
        </a>.
 </Typography>
      
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="body2" color="secondary"><Typography variant="body2" color="primary"><strong>Data de Nascimento:</strong></Typography> 24/06/2004</Typography> {/* Resposta na cor secundária */}
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body2" color="secondary"><Typography variant="body2" color="primary"><strong>Nacionalidade:</strong></Typography> Brasileiro</Typography> {/* Resposta na cor secundária */}
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body2" color="secondary"><Typography variant="body2" color="primary"><strong>Objetivo Profissional:</strong> </Typography>Adquirir meu primeiro emprego na área de Desenvolvimento Web</Typography> {/* Resposta na cor secundária */}
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body2" color="secondary"><Typography variant="body2" color="primary"><strong>Sonho Profissional:</strong></Typography> Ser contratado como senior em UX Designer</Typography> {/* Resposta na cor secundária */}
        </Grid>
      </Grid>
    </StyledBox>
  );
};

export default AboutMe;

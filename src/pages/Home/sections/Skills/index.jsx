import React from "react";
import { Box, Container, Grid, Typography, LinearProgress, styled } from "@mui/material";
import Skill from "../../../../assets/images/skills.png"
// Estilizando as barras de progresso com cor secundária
const StyledProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  backgroundColor: theme.palette.grey[800], // Cor de fundo da barra
  "& .MuiLinearProgress-bar": {
    borderRadius: 5,
    backgroundColor: theme.palette.secondary.main, // Cor da barra (secundária)
  },
}));

// Dados das hard e soft skills com porcentagens
const hardSkills = [
  { name: "JavaScript", level: 80 },
  { name: "React", level: 90 },
  { name: "Node.js", level: 60 },
  { name: "CSS", level: 90 },
  { name: "HTML", level: 95 },
  { name: "TypeScript", level: 30 },
  { name: "UX", level: 90 },
  { name: "SQL", level: 75 },
  { name: "Git", level: 80 },
  { name: "Next.js", level: 50 },
  { name: "Redux", level: 55 },
  { name: "express", level: 60 },
];

const softSkills = [
  { name: "Comunicação", level: 55 },
  { name: "Trabalho em Equipe", level: 70 },
  { name: "Resolução de Problemas", level: 60 },
  { name: "Liderança", level: 35 },
  { name: "Criatividade", level: 85 },
  { name: "Adaptabilidade", level: 90 },
  { name: "Inteligência Emocional", level: 85 },
  { name: "Pensamento Crítico", level: 70 },
  { name: "Gestão de Tempo", level: 65 },
  { name: "Negociação", level: 55 },
  { name: "Organização", level: 80 },
  { name: "Proatividade", level: 70 },
];

// Componente para renderizar skills em forma de grid
const SkillsGrid = ({ skills }) => (
  <Grid container spacing={2}>
    {skills.map((skill, index) => (
      <Grid item xs={6} key={index}>
        <Typography variant="body1" color="primary">
          {skill.name} - {skill.level}%
        </Typography>
        <StyledProgress variant="determinate" value={skill.level} />
      </Grid>
    ))}
  </Grid>
);

const SkillsSection = () => {
  return (
    <Container maxWidth="lg" sx={{ paddingTop: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Typography variant="h4" color="primary" gutterBottom>
            Hard Skills
          </Typography>
          <SkillsGrid skills={hardSkills} />
          
          <Box mt={6}>
            <Typography variant="h4" color="primary" gutterBottom>
              Soft Skills
            </Typography>
            <SkillsGrid skills={softSkills} />
          </Box>
        </Grid>

        {/* Espaço reservado para a imagem ao lado */}
        <Grid item xs={12} md={4}>
          <Box sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src={Skill}
              alt="Imagem"
              style={{ maxWidth: '100%', borderRadius: '10px' }}
            />
          </Box>
        </Grid>
      </Grid>
  
    </Container>
  );
};

export default SkillsSection;

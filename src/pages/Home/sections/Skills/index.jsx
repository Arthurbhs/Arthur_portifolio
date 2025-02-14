import React from "react";
import { Box, Container, Grid, Typography, LinearProgress, styled } from "@mui/material";
import Skill from "../../../../assets/images/skills.png";

const StyledProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  backgroundColor: theme.palette.grey[800],
  "& .MuiLinearProgress-bar": {
    borderRadius: 5,
    backgroundColor: theme.palette.secondary.main,
  },
}));

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
  { name: "Express", level: 60 },
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

const SkillsGrid = ({ skills }) => (
  <Grid container spacing={2}>
    {skills.map((skill, index) => (
      <Grid item xs={12} sm={6} key={index}>
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
    <Container maxWidth="lg" sx={{ paddingY: 6 }}>
      <Grid container spacing={4} alignItems="center">
        {/* Texto e Skills */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" color="primary" gutterBottom>
            Hard Skills
          </Typography>
          <SkillsGrid skills={hardSkills} />

          <Box mt={4}>
            <Typography variant="h4" color="primary" gutterBottom>
              Soft Skills
            </Typography>
            <SkillsGrid skills={softSkills} />
          </Box>
        </Grid>

        {/* Imagem Responsiva */}
        <Grid item xs={12} md={6} display="flex" justifyContent="center">
          <Box
            component="img"
            src={Skill}
            alt="Skills"
            sx={{
              width: { xs: "80%", sm: "70%", md: "100%" },
              maxWidth: "400px",
              height: "auto",
              borderRadius: 2,
              boxShadow: 3,
              marginTop: { xs: 4, md: 0 },
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SkillsSection;

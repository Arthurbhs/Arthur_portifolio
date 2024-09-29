import React from "react";
import { Grid, Box } from "@mui/material";
import ProjectBox from "../../../../components/ProjectsBox";

// Importando as imagens diretamente
import argosHomeImage from "../../../../assets/images/argos_home.png";
import asseguraImage from "../../../../assets/images/assegura.png";
import primitive from "../../../../assets/images/primitive.png";
import argosLogo from "../../../../assets/images/Argos_logo.png";

const infoData = [
  { imageSrc: argosHomeImage, title: "Argos", description: "web site ainda em desenvolvimento, para a recente empresa de seguros Argos", link: "https://argorseguros-prototype.netlify.app/" },
  { imageSrc: asseguraImage, title: "Assegura", description: "Web site para a franquia na baixada santista da empresa de clube beneficios e proteção veicular Assegura.", link: "https://assegura-prototype.netlify.app/" },
  { imageSrc: primitive, title: "Artes da Baixada pré-historica", description: "Ilustrações de logos feitas para uma Web serie criada por uma canal do yotube Primitive Domain", link: "https://www.instagram.com/p/DAe7drotn7L/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { imageSrc: argosLogo, title: "Prototipos da logo Argos", description: "Todos os prototipos, ideias e rascunhos da logo criada para a empresa de seguros Argos", link: "https://www.instagram.com/p/DAe4k9NtHIr/?igsh=YzljYTk1ODg3Zg%3D%3D" },
  // Continue adicionando os outros itens do array...
];

const InfoGrid = () => {
  return (
    <Box
      sx={{
        mt: 10,
        position: "absolute",
        left: { xs: 0, md: "10vh" }, // left é 0 em telas menores
        backgroundColor: "#0B0A1A",
      }}
    >
      <Grid container spacing={1} justifyContent="center"> {/* spacing ajustado para 1 */}
        {infoData.map((info, index) => (
          <Grid item xs={12} md={6} key={index}>
            <ProjectBox 
              imageSrc={info.imageSrc} 
              title={info.title} 
              description={info.description} 
              link={info.link} 
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default InfoGrid;

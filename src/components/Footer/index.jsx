import React from "react";
import { Box, Typography, Grid, styled } from "@mui/material";
import Game from "../../assets/images/game_control.png"
// Estilizando o rodapé para garantir a responsividade
const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#0B0A1A",
  color: "#fff",
  padding: theme.spacing(4),
  textAlign: "center",
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
}));

// Componente do rodapé
const Footer = () => {
  return (
    <FooterContainer>
         <Box display="flex" justifyContent="center" mt={2}>
            <img
              src={Game}
              alt="Logo do criador"
              style={{
                width: "300px",
                height: "300px",
                objectFit: "cover",
                margin: "30px"
              }}
            />
          </Box>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={4}>
          
          {/* Endereço */}
          <Typography variant="h6" color="secondary">
            Cidade atual
          </Typography>
          <Typography variant="body2">
            Praia Grande, SP
          </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          {/* Telefone */}
          <Typography variant="h6" color="secondary">
            Telefone:
          </Typography>
          <Typography variant="body2">
            (13) 98105-3610
          </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          {/* Nome do Criador e E-mail */}
          <Typography variant="h6" color="secondary">
            Criado por:
          </Typography>
          <Typography variant="body2">
           Arthur Barbosa Holanda da Silva
          </Typography>
          <Typography variant="body2">
            arthur.shekinarfoxy@gmail.com
          </Typography>
        </Grid>

        <Grid item xs={12} md={12}>
      
       
        </Grid>
      </Grid>
    </FooterContainer>
  );
};

export default Footer;

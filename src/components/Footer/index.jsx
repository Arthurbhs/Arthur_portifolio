import React from "react";
import { Box, Typography, Grid, styled } from "@mui/material";

// Estilizando o rodapé para garantir a responsividade
const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#020305",
  color: "#fff",
  textAlign: "center",
  marginTop: "50px"
   
}));

// Componente do rodapé
const Footer = () => {
  return (
    <FooterContainer>
        
      <Grid container spacing={4} justifyContent="center" sx={{marginTop: 10}}>
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

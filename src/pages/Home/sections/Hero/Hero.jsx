import React from "react";
import { Box, Button, Container, Grid, Typography, styled } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpeg";
import DownloadIcon from '@mui/icons-material/Download';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";
import cvLink from "../../../../assets/Archives/Arthur_Barbosa_CV.pdf"

// Definindo estilos fora do componente
const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: "#0B0A1A",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up('xs')]: {
        paddingTop: "100px",
    },
    [theme.breakpoints.up('md')]: {
        paddingTop: "0",
    },
}));

const StyledImg = styled("img")(({ theme }) => ({
    width: "75%",
    height: "auto", // Mantém a proporção da imagem
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`,
}));

const Hero = () => {
  
    const whatsappLink = "https://wa.me/5513981053610?text=Olá%20Arthur,%20gostaria%20de%20entrar%20em%20contato!"; // Substitua pelo seu número de telefone


    return (
        <StyledHero>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5}>
                        <Box position="relative">
                            <Box position="absolute" width={"150%"} top={-100} right={0}>
                                <AnimatedBackground />
                            </Box>
                            <Box position="relative" textAlign="center">
                                <StyledImg src={Avatar} alt="Arthur Barbosa" /> {/* Adicionando alt */}
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Typography color="primary.main" variant="h1" textAlign="center" pb={2}>
                            Arthur Barbosa
                        </Typography>
                        <Typography color="secondary.main" variant="h2" textAlign="center">
                            I'm a Front-end Developer
                        </Typography>
                        <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                            <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                <Button
                                    variant="outlined"
                                    startIcon={<DownloadIcon />}
                                    href={cvLink} // Link para download
                                    download
                                >
                                    Download CV
                                </Button>
                            </Grid>
                            <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                <Button
                                    variant="outlined"
                                    startIcon={<PermPhoneMsgIcon />}
                                    href={whatsappLink} // Link do WhatsApp
                                    target="_blank" // Abre em nova aba
                                >
                                    Contact me
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </StyledHero>
    );
};

export default Hero;

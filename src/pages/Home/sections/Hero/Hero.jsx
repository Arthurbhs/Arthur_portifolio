import React from "react";
import { Box, Button, Container, Grid, styled, useMediaQuery, useTheme } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpeg";
import DownloadIcon from '@mui/icons-material/Download';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";
import cvLink from "../../../../assets/Archives/Arthur_Barbosa_CV.pdf";
import HeroTitleImage from "../../../../assets/images/portifolioArt.png"; // Adicione a imagem aqui

const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: "#0B0A1A",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(2),
}));

const StyledImg = styled("img")(({ theme }) => ({
    width: "100%",
    maxWidth: "300px",
    height: "auto",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`,
}));

const Hero = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const whatsappLink = "https://wa.me/5513981053610?text=Olá%20Arthur,%20gostaria%20de%20entrar%20em%20contato!";

    return (
        <StyledHero>
            <Container maxWidth="lg">
                <Grid container spacing={3} alignItems="center" justifyContent="center">
                    <Grid item xs={12} md={5} textAlign="center">
                        <Box position="relative" display="inline-block">
                            <Box position="absolute" width={isMobile ? "100%" : "150%"} top={-50} right={0}>
                                <AnimatedBackground />
                            </Box>
                            <StyledImg src={Avatar} alt="Arthur Barbosa" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={7} display="flex" justifyContent="center" alignItems="center">
                        <img src={HeroTitleImage} alt="Hero Title" style={{ width: "100%", maxWidth: "900px" }} />
                    </Grid>
                    <Grid item xs={12} display="flex" justifyContent="center">
                        <Grid container spacing={2} justifyContent="center" pt={3}>
                            <Grid item xs={12} sm={6} md={4} display="flex" justifyContent="center">
                                <Button
                                    variant="outlined"
                                    startIcon={<DownloadIcon />}
                                    href={cvLink}
                                    download
                                    fullWidth={isMobile}
                                >
                                    Download CV
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} display="flex" justifyContent="center">
                                <Button
                                    variant="outlined"
                                    startIcon={<PermPhoneMsgIcon />}
                                    href={whatsappLink}
                                    target="_blank"
                                    fullWidth={isMobile}
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

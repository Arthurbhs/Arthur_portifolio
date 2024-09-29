import React, { useState } from "react";
import { Box, Container, styled, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Argos from "../../../../assets/images/argos_home.png";
import Assegura from "../../../../assets/images/assegura.png";

// Mantendo o mesmo estilo do background
const StyledCarousel = styled("div")(({ theme }) => ({
  backgroundColor: '#0B0A1A',
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",  // Alinha o conteúdo ao centro horizontalmente
  paddingTop: "100px",
  margin: 0, // Remove a margem inferior
  paddingBottom: 0, // Remove o padding inferior
}));

const StyledImg = styled("img")(({ theme }) => ({
  width: "100%",
  height: "auto",
  borderRadius: "10px",
  display: "block",
  margin: "0",
  transition: "transform 0.5s ease, opacity 0.5s ease", // Suave transição para o efeito
}));

const SlideWrapper = styled(Box)(({ isCurrentSlide }) => ({
  opacity: isCurrentSlide ? 1 : 0.2,   // Slide atual é opaco, os outros são mais transparentes
  transform: isCurrentSlide ? 'scale(1.0)' : 'scale(0.2)',  // Slide atual em escala 1, os outros menores
  transition: "transform 0.8s ease, opacity 0.8s ease",  // Transições suaves ao mudar de slide
  padding: '0px', // Adiciona padding lateral para todos os slides
}));

const StyledLink = styled("a")({
  textDecoration: "none", // Remove o sublinhado
});

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);  // Estado para armazenar o slide atual

  // Adicionando as imagens, títulos e links ao array de slides
  const slides = [
    { id: 1, src: Argos, alt: "Slide Argos", title: "Projeto Argos", link: "https://argorseguros-prototype.netlify.app/" },
    { id: 2, src: Assegura, alt: "Slide Assegura", title: "Projeto Assegura", link: "https://assegura-prototype.netlify.app/" },
    // Adicione mais slides aqui se necessário
  ];

  // Configuração do carrossel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Mostrar 1 slide ao mesmo tempo (um principal e dois parciais nas laterais)
    centerMode: true,   // Coloca o slide ativo no centro
    centerPadding: '50px', // Remove o padding para garantir que o slide central preencha o espaço
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex), // Atualiza o índice do slide atual
  };

  return (
    <StyledCarousel>
      <Container maxWidth="lg" disableGutters>
        <Typography variant="h4" color="primary" align="center" mb={4}>
          Projetos
        </Typography>
        <Slider {...settings}>
          {slides.map((slide) => (
            <SlideWrapper key={slide.id} isCurrentSlide={slide.id - 1 === currentSlide}>
              <StyledLink href={slide.link} target="_blank" rel="noopener noreferrer">
                <StyledImg src={slide.src} alt={slide.alt} />
                <Typography variant="h6" color="primary" align="center" mt={2}>
                  {slide.title}
                </Typography>
              </StyledLink>
            </SlideWrapper>
          ))}
        </Slider>
      </Container>
    </StyledCarousel>
  );
};

export default Carousel;

import React, { useState } from "react";
import { Box, Container, styled, Typography, Grid } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Argos from "../../../../assets/images/argos_home.png";
import Assegura from "../../../../assets/images/assegura.png";
import LinkBox from "../../../../components/siteBox";

// Estilo para o carrossel
const StyledCarousel = styled("div")(({ theme }) => ({
  backgroundColor: "#0B0A1A",
  padding: theme.spacing(4, 0),
  textAlign: "center",
}));

const StyledImg = styled("img")(({ theme }) => ({
  width: "100%",
  height: "auto",
  borderRadius: theme.shape.borderRadius,
  transition: "transform 0.5s ease, opacity 0.5s ease",
}));

const SlideWrapper = styled(Box)(({ isCurrentSlide }) => ({
  opacity: isCurrentSlide ? 1 : 0.5,
  transform: isCurrentSlide ? "scale(1.0)" : "scale(0.9)",
  transition: "transform 0.8s ease, opacity 0.8s ease",
}));

const StyledLink = styled("a")({
  textDecoration: "none",
});

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      src: Argos,
      alt: "Slide Argos",
      title: "Projeto Argos",
      link: "https://argorseguros-prototype.netlify.app/",
    },
    {
      id: 2,
      src: Assegura,
      alt: "Slide Assegura",
      title: "Projeto Assegura",
      link: "https://assegura-prototype.netlify.app/",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "50px",
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: ( oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  const infoData = [
    {
      imageSrc: Argos,
      title: "Argos",
      description:
        "Web site ainda em desenvolvimento, para a recente empresa de seguros Argos",
      link: "https://argusseguros.com/",
    },
    {
      imageSrc: Assegura,
      title: "Assegura",
      description:
        "Web site para a franquia na baixada santista da empresa de clube benefícios e proteção veicular Assegura.",
      link: "https://assegura-prototype.netlify.app/",
    },
  ];

  return (
    <StyledCarousel>
      <Container maxWidth="lg">
        {/* Carrossel */}
         <Typography variant="h4" color="primary" mb={4}   sx={{ 
           fontFamily: "'VT323', monospace", 
           letterSpacing: 2, // separando um pouco as letras
           textShadow: '0 0 5px rgba(0, 255, 42, 0.7), 0 0 10px rgba(0, 255, 42, 0.7), 0 0 15px rgba(0, 255, 42, 0.7)', // efeito neon
           fontSize: '3.5rem', // aumente o tamanho da fonte
         }}
         >
          Área de Seguro
        </Typography>
        <Slider {...settings}>
          {slides.map((slide) => (
            <SlideWrapper
              key={slide.id}
              isCurrentSlide={slide.id - 1 === currentSlide}
            >
              <StyledLink
                href={slide.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <StyledImg src={slide.src} alt={slide.alt} />
                <Typography variant="h6" color="primary" mt={2}>
                  {slide.title}
                </Typography>
              </StyledLink>
            </SlideWrapper>
          ))}
        </Slider>

        {/* Lista de ProjectBoxes */}
        <Box sx={{ mt: 3 }}>
          <Grid container spacing={5} justifyContent="center">
            {infoData.map((info, index) => (
              <Grid item xs={10} sm={3} md={6} key={index}>
                <LinkBox
                  imageSrc={info.imageSrc}
                  title={info.title}
                  description={info.description}
                  link={info.link}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </StyledCarousel>
  );
};

export default Carousel;

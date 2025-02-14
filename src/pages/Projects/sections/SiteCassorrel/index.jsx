import React, { useState } from "react";
import { Box, Container, styled, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Argos from "../../../../assets/images/argos_home.png";
import Assegura from "../../../../assets/images/assegura.png";
import Jurassic from "../../../../assets/images/jurassicSite.png";
import Thermo from "../../../../assets/images/thermoflow.png";
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
      title: "Argus Consultoria",
      link: "https://argusseguros.com/",
    },
    {
      id: 2,
      src: Assegura,
      alt: "Slide Assegura",
      title: "Projeto Assegura",
      link: "https://assegura-prototype.netlify.app/",
    },
    {
      id: 3,
      src: Jurassic,
      alt: "Slide BP",
      title: "Baixada Pré-historica Website",
      link: "https://baixada-pre-historica-serie.netlify.app/",
    },
    {
      id: 4,
      src: Thermo,
      alt: "Slide ThermoFlow",
      title: "Thermo flow",
      link: "https://thermoflowcalculator.netlify.app/Historia",
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



  return (
    <StyledCarousel>
      <Container maxWidth="lg">
        {/* Carrossel */}
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

       
      </Container>
    </StyledCarousel>
  );
};

export default Carousel;

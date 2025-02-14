import React, { useState } from "react";
import { Box, Container, styled, Typography, IconButton, Modal, useMediaQuery, useTheme } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Acai1 from "../../../../assets/images/Acai1.png";
import Acai2 from "../../../../assets/images/Acai2.png";
import Acai3 from "../../../../assets/images/Acai3.png";
import Sorv1 from "../../../../assets/images/sorvete1.png";
import Sorv2 from "../../../../assets/images/sorvete2.png";
import '@fontsource/vt323';

// Estilo para o carrossel
const StyledCarousel = styled("div")(({ theme }) => ({
  backgroundColor: "#0B0A1A",
  padding: theme.spacing(4, 0),
  textAlign: "center",
}));

const StyledImg = styled("img")(({ theme }) => ({
  width: "100%",
  height: "auto",
  maxHeight: "400px",
  objectFit: "contain",
  borderRadius: theme.shape.borderRadius,
  cursor: "pointer",
}));

const SlideWrapper = styled(Box)(({ isCurrentSlide }) => ({
  opacity: isCurrentSlide ? 1 : 0.5,
  transform: isCurrentSlide ? "scale(1.0)" : "scale(0.9)",
  transition: "transform 0.8s ease, opacity 0.8s ease",
}));

const ModalImage = styled("img")(({ theme }) => ({
  maxWidth: "90%",
  maxHeight: "90%",
  borderRadius: theme.shape.borderRadius,
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(2),
  right: theme.spacing(2),
  color: theme.palette.common.white,
  backgroundColor: theme.palette.grey[800],
  "&:hover": {
    backgroundColor: theme.palette.grey[700],
  },
}));

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const slides = [
    { id: 1, src: Acai1, alt: "Açaí no copo", title: "Banner de Açaí no copo" },
    { id: 2, src: Acai2, alt: "Açaí 700ml", title: "Banner para Açaí de 700ml" },
    { id: 3, src: Acai3, alt: "Açaí na taça", title: "Banner para Açaí na taça" },
    { id: 4, src: Sorv1, alt: "Picolés gourmet", title: "Banner para picolés gourmet" },
    { id: 5, src: Sorv2, alt: "Sorvete na casquinha", title: "Banner para sorvete na casquinha" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isSmallScreen ? 1 : isMediumScreen ? 2 : 3, // Ajusta o número de slides conforme a tela
    centerMode: !isSmallScreen, // Desativa o efeito de centro em telas pequenas
    centerPadding: isSmallScreen ? "0px" : "40px",
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  const handleImageClick = (image) => {
    setModalImage(image);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setModalImage(null);
  };

  return (
    <StyledCarousel>
      <Container maxWidth="lg">
       <Typography variant="h4" color="primary" mb={4} sx={{ fontFamily: "'Awami Nastaliq', serif",
                   letterSpacing: 2,
                   fontSize: "2.5rem",
                   color: '#0B0A1A',
                 fontWeight: 'bold',
                 WebkitTextStroke: '1.5px rgb(30, 247, 1)', 
               }}>
          AÇAÍ E SORVETERIA
        </Typography>

        <Slider {...settings}>
          {slides.map((slide) => (
            <SlideWrapper key={slide.id} isCurrentSlide={slide.id - 1 === currentSlide}>
              <StyledImg src={slide.src} alt={slide.alt} onClick={() => handleImageClick(slide.src)} />
              <Typography variant="h6" color="primary" mt={2}>
                {slide.title}
              </Typography>
            </SlideWrapper>
          ))}
        </Slider>

        {/* Modal para exibir a imagem em tela cheia */}
        <Modal open={modalOpen} onClose={handleCloseModal}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="100vh"
            position="relative"
          >
            <CloseButton onClick={handleCloseModal}>
              <CloseIcon />
            </CloseButton>
            {modalImage && <ModalImage src={modalImage} alt="Imagem ampliada" />}
          </Box>
        </Modal>
      </Container>
    </StyledCarousel>
  );
};

export default Carousel;

import React, { useState } from "react";
import { Box, Container, styled, Typography, Grid, Modal, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Acai1 from "../../../../assets/images/segur01.png";
import Acai2 from "../../../../assets/images/segur02.png";
import Acai3 from "../../../../assets/images/segur04.png";
import Sorv1 from "../../../../assets/images/segur05.png";
import Sorv2 from "../../../../assets/images/segur06.png";
import ProjectBox from "../../../../components/ProjectsBox";

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

  const slides = [
    {
      id: 1,
      src: Acai1,
      alt: "Slide Argos",
      title: "banner para vistoria",
    },
    {
      id: 2,
      src: Acai2,
      alt: "Slide Assegura",
      title: "Banner  foco em interesse por segurança",
    },
    {
      id: 3,
      src: Acai3,
      alt: "Slide Assegura",
      title: "banner com foco em interesse por oferta",
    },
    {
      id: 4,
      src: Sorv1,
      alt: "Slide Assegura",
      title: "banner para a prospecção de clientes ",
    },
    {
      id: 5,
      src: Sorv2,
      alt: "Slide Assegura",
      title: "banner com foco em interesse por intimidação",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Mostra 3 imagens ao mesmo tempo
    centerMode: true, // Permite visualizar as imagens ao lado
    centerPadding: "40px", // Adiciona o padding nas imagens ao lado
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
        {/* Carrossel */}
        <Typography variant="h4" color="primary" mb={4} sx={{ 
          fontFamily: "'VT323', monospace", 
          letterSpacing: 2, // separando um pouco as letras
          textShadow: '0 0 5px rgba(0, 255, 42, 0.7), 0 0 10px rgba(0, 255, 42, 0.7), 0 0 15px rgba(0, 255, 42, 0.7)', // efeito neon
          fontSize: '3.5rem', // aumente o tamanho da fonte
        }}>
          proteção veicular
        </Typography>
        <Slider {...settings}>
          {slides.map((slide) => (
            <SlideWrapper key={slide.id} isCurrentSlide={slide.id - 1 === currentSlide}>
              <StyledImg
                src={slide.src}
                alt={slide.alt}
                onClick={() => handleImageClick(slide.src)} // Abre o modal com a imagem
              />
              <Typography variant="h6" color="primary" mt={2}>
                {slide.title}
              </Typography>
            </SlideWrapper>
          ))}
        </Slider>

        {/* Modal para exibir a imagem */}
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

import React, { useState } from "react";
import { Box, Container, styled, Typography, Modal, IconButton, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Acai1 from "../../../../assets/images/segur01.png";
import Acai2 from "../../../../assets/images/segur02.png";
import Acai3 from "../../../../assets/images/segur04.png";
import Sorv1 from "../../../../assets/images/segur05.png";
import Sorv2 from "../../../../assets/images/segur06.png";

const StyledCarousel = styled("div")(({ theme }) => ({
  backgroundColor: "#0B0A1A",
  padding: theme.spacing(4, 0),
  textAlign: "center",
  overflow: "hidden",
}));

const StyledImg = styled("img")(() => ({
  width: "100%",
  height: "auto",
  maxHeight: "400px",
  objectFit: "contain",
  borderRadius: "8px",
  cursor: "pointer",
}));

const SlideWrapper = styled(Box)(({ isCurrentSlide }) => ({
  opacity: isCurrentSlide ? 1 : 0.5,
  transform: isCurrentSlide ? "scale(1.0)" : "scale(0.9)",
  transition: "transform 0.8s ease, opacity 0.8s ease",
}));

const ModalImage = styled("img")(() => ({
  maxWidth: "90%",
  maxHeight: "90%",
  borderRadius: "8px",
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const slides = [
    { id: 1, src: Acai1, alt: "Slide Argos", title: "banner para vistoria" },
    { id: 2, src: Acai2, alt: "Slide Assegura", title: "Banner foco em segurança" },
    { id: 3, src: Acai3, alt: "Slide Assegura", title: "banner com foco em oferta" },
    { id: 4, src: Sorv1, alt: "Slide Assegura", title: "banner para prospecção" },
    { id: 5, src: Sorv2, alt: "Slide Assegura", title: "banner com foco em intimidação" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : isTablet ? 2 : 3,
    centerMode: true,
    centerPadding: isMobile ? "20px" : "40px",
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (_, newIndex) => setCurrentSlide(newIndex),
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
          SEGUROS
        </Typography>
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <SlideWrapper key={slide.id} isCurrentSlide={index === currentSlide}>
              <StyledImg src={slide.src} alt={slide.alt} onClick={() => handleImageClick(slide.src)} />
              <Typography variant="h6" color="primary" mt={2}>{slide.title}</Typography>
            </SlideWrapper>
          ))}
        </Slider>

        <Modal open={modalOpen} onClose={handleCloseModal}>
          <Box display="flex" alignItems="center" justifyContent="center" height="100vh" position="relative">
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

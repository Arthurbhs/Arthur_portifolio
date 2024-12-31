import React, { useState } from "react";
import { Box, Container, styled, Typography, IconButton, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Video from "../../../../assets/videos/tube1.mp4";
import Video1 from "../../../../assets/videos/tube2.mp4";
import Video2 from "../../../../assets/videos/tube3.mp4";
import "@fontsource/vt323";

// Estilo para o carrossel
const StyledCarousel = styled("div")(({ theme }) => ({
  backgroundColor: "#0B0A1A",
  padding: theme.spacing(4, 0),
  textAlign: "center",
}));

const StyledVideo = styled("video")(({ theme }) => ({
  width: "100%",
  maxHeight: "400px",
  borderRadius: theme.shape.borderRadius,
  cursor: "pointer",
}));

const SlideWrapper = styled(Box)(({ isCurrentSlide }) => ({
  opacity: isCurrentSlide ? 1 : 0.5,
  transform: isCurrentSlide ? "scale(1.0)" : "scale(0.9)",
  transition: "transform 0.8s ease, opacity 0.8s ease",
}));

const ModalContent = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  height: "100vh",
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
  const [modalContent, setModalContent] = useState(null);

  const slides = [
    { id: 1, videoSrc: Video, alt: "music video design", type: "video" },
    { id: 2, videoSrc: Video1, alt: "edição de videos dark", type: "video" },
    { id: 3, videoSrc: Video2, alt: "video tutorial", type: "video" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "40px",
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: ( oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  const getCenteredIndex = (index) => {
    const totalSlides = slides.length;
    const centeredIndex = (currentSlide + Math.floor(settings.slidesToShow / 2)) % totalSlides;
    return index === centeredIndex;
  };

  const handleContentClick = (content) => {
    setModalContent(content);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setModalContent(null);
  };

  return (
    <StyledCarousel>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          color="primary"
          mb={4}
          sx={{
            fontFamily: "'VT323', monospace",
            letterSpacing: 2,
            textShadow:
              "0 0 5px rgba(0, 255, 42, 0.7), 0 0 10px rgba(0, 255, 42, 0.7), 0 0 15px rgba(0, 255, 42, 0.7)",
            fontSize: "3.5rem",
          }}
        >
          Videos para youtube e instagram
        </Typography>
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <SlideWrapper key={slide.id} isCurrentSlide={getCenteredIndex(index)}>
              <StyledVideo
                src={slide.videoSrc}
                onClick={() => handleContentClick(slide.videoSrc)}
                onMouseEnter={(e) => e.target.play()}
                onMouseLeave={(e) => e.target.pause()}
                controls={false}
                muted
                loop
              />
              <Typography variant="h6" color="primary" mt={2}>
                {slide.alt}
              </Typography>
            </SlideWrapper>
          ))}
        </Slider>

        {/* Modal para exibir conteúdo (vídeo) */}
        <Modal open={modalOpen} onClose={handleCloseModal}>
          <ModalContent>
            <CloseButton onClick={handleCloseModal}>
              <CloseIcon />
            </CloseButton>
            {modalContent && (
              <StyledVideo src={modalContent} controls autoPlay />
            )}
          </ModalContent>
        </Modal>
      </Container>
    </StyledCarousel>
  );
};

  
export default Carousel;

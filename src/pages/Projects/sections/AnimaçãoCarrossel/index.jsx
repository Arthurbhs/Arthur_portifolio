import React, { useState } from "react";
import { Box, Container, styled, Typography, IconButton, Modal, useTheme, useMediaQuery } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Video from "../../../../assets/videos/animação1.mp4";
import Video1 from "../../../../assets/videos/animação2.mp4";
import Video2 from "../../../../assets/videos/animação3.mp4";
import "@fontsource/vt323";

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
  [theme.breakpoints.down("sm")]: {
    maxHeight: "250px",
  },
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
  padding: theme.spacing(2),
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

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const slides = [
    { id: 1, videoSrc: Video, alt: "animações de ação" },
    { id: 2, videoSrc: Video1, alt: "animação para web série e documentário" },
    { id: 3, videoSrc: Video2, alt: "animações engraçadas" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isSmallScreen ? 1 : 3,
    slidesToScroll: 1,
    centerMode: !isSmallScreen,
    centerPadding: isSmallScreen ? "0px" : "40px",
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (_, newIndex) => setCurrentSlide(newIndex),
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
            fontFamily: "'Awami Nastaliq', serif",
            letterSpacing: 2,
            fontSize: "2.5rem",
            color: '#0B0A1A',
          fontWeight: 'bold',
          WebkitTextStroke: '1.5px rgb(30, 247, 1)', // Contorno preto
          
          }}
        >
          ANIMAÇÂO EM 2D
        </Typography>
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <SlideWrapper key={slide.id} isCurrentSlide={index === currentSlide}>
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
        {/* Modal */}
        <Modal open={modalOpen} onClose={handleCloseModal}>
          <ModalContent>
            <CloseButton onClick={handleCloseModal}>
              <CloseIcon />
            </CloseButton>
            {modalContent && (
              <StyledVideo src={modalContent} controls autoPlay style={{ maxWidth: "90vw", maxHeight: "80vh" }} />
            )}
          </ModalContent>
        </Modal>
      </Container>
    </StyledCarousel>
  );
};

export default Carousel;

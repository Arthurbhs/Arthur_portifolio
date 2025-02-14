import React, { useState } from "react";
import { Box, Container, styled, Typography, IconButton, Modal, useTheme, useMediaQuery } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Video from "../../../../assets/videos/tube1.mp4";
import Video1 from "../../../../assets/videos/tube2.mp4";
import Video2 from "../../../../assets/videos/tube3.mp4";
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
  padding: "10px",
}));

const ModalContent = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  height: "100vh",
  position: "relative",
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
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const slides = [
    { id: 1, videoSrc: Video, alt: "Music video design", type: "video" },
    { id: 2, videoSrc: Video1, alt: "Edição de vídeos dark", type: "video" },
    { id: 3, videoSrc: Video2, alt: "Vídeo tutorial", type: "video" },
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
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
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
      <Typography variant="h4" color="primary" mb={4} sx={{ fontFamily: "'Awami Nastaliq', serif",
            letterSpacing: 2,
            fontSize: "2.5rem",
            color: '#0B0A1A',
          fontWeight: 'bold',
          WebkitTextStroke: '1.5px rgb(30, 247, 1)', 
        }}>
         YOTUBE E INSTAGRAM
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
              <Typography
                variant="h6"
                color="primary"
                mt={2}
                sx={{
                  fontSize: isMobile ? "1rem" : "1.2rem",
                  textAlign: "center",
                }}
              >
                {slide.alt}
              </Typography>
            </SlideWrapper>
          ))}
        </Slider>

        <Modal open={modalOpen} onClose={handleCloseModal}>
          <ModalContent>
            <CloseButton onClick={handleCloseModal}>
              <CloseIcon />
            </CloseButton>
            {modalContent && (
              <StyledVideo
                src={modalContent}
                controls
                autoPlay
                style={{
                  width: "90%",
                  maxWidth: "800px",
                }}
              />
            )}
          </ModalContent>
        </Modal>
      </Container>
    </StyledCarousel>
  );
};

export default Carousel;

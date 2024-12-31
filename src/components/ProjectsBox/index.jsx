import React, { useState } from 'react';
import { Box, Typography, styled, Modal } from '@mui/material';

// Estilizando o container principal
const WideBox = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(1),
  backgroundColor: "#0B0A1A",
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  gap: theme.spacing(2),
  height: '20vh',
  width: '80vh',
  borderLeft: '2px solid transparent',
  borderBottom: '2px solid transparent',
  transition: 'all 0.4s ease',
  overflow: 'hidden',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: "#0f0d24",
    transform: 'scale(1.05)',
    borderLeft: `2px solid ${theme.palette.secondary.main}`,
    borderBottom: `4px solid ${theme.palette.secondary.main}`,
  },
  [theme.breakpoints.down('md')]: {
    height: 'auto',
    width: '100%',
    flexDirection: 'column',
  },
}));

// Estilizando a imagem
const Image = styled('img')(({ theme }) => ({
  maxWidth: '80%',
  maxHeight: '80%',
  objectFit: 'cover',
  borderRadius: theme.shape.borderRadius,
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
    maxHeight: '50%',
  },
}));

// Estilizando a caixa de texto
const TextBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  overflow: 'hidden',
  wordWrap: 'break-word',
  whiteSpace: 'normal',
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
    padding: theme.spacing(1),
  },
}));

// Estilizando o Modal
const StyledModal = styled(Modal)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
}));

const ModalImage = styled('img')(({ theme }) => ({
  maxWidth: '90%',
  maxHeight: '90%',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[5],
}));

// Componente principal
const ImageBoxWithModal = ({ imageSrc, title, description }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <WideBox onClick={handleOpen}>
        <Image src={imageSrc} alt={title} />
        <TextBox>
          <Typography variant="body1" color="primary">
            {title}
          </Typography>
          <Typography variant="body2" color="secondary">
            {description}
          </Typography>
        </TextBox>
      </WideBox>

      {/* Modal para exibir a imagem */}
      <StyledModal open={open} onClose={handleClose}>
        <ModalImage src={imageSrc} alt={title} />
      </StyledModal>
    </>
  );
};

export default ImageBoxWithModal;

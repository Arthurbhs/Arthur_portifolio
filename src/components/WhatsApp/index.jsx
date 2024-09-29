import React from "react";
import { styled, Fab } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

// Estilo para o botão flutuante
const FloatingButton = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(2),
  right: theme.spacing(2),
  backgroundColor: "#0e7815",
  color: "#ffffff",
  '&:hover': {
    backgroundColor: "#00db0f",
  },
}));

const WhatsAppButton = () => {
  const handleClick = () => {
    // Link para abrir o WhatsApp
    window.open("https://wa.me/5513981053610", "_blank");
  };

  return (
    <FloatingButton onClick={handleClick}>
      <WhatsAppIcon />
    </FloatingButton>
  );
};

export default WhatsAppButton;

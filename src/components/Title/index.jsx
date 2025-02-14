import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

const FullWidthBox = ({ title }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: isSmallScreen ? '90%' : '95%', // Ajuste para telas menores
        bgcolor: '#0B0A1A',
        p: { xs: 2, sm: 3, md: 4 }, // Ajustando padding para diferentes tamanhos de tela
        textAlign: 'center',
        mx: 'auto', // Centralizando a box
      }}
    >
      <Typography
        variant={isSmallScreen ? 'h4' : isMediumScreen ? 'h3' : 'h3'} // Ajustando tamanhos de fonte responsivamente
        sx={{
          fontFamily: "'Awami Nastaliq', serif",
          color: '#0B0A1A',
          fontWeight: 'bold',
          WebkitTextStroke: isSmallScreen ? '0.9px rgb(255, 255, 255)' : '1.5px rgb(255, 255, 255)', // Contorno menor em telas pequenas
          textTransform: 'uppercase', // Todas as letras maiúsculas
          wordBreak: 'break-word', // Garante que textos longos quebrem corretamente
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default FullWidthBox;

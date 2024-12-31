import React from 'react';
import { Box, Typography } from '@mui/material';
// Importando a fonte estilo 8-bits
import '@fontsource/press-start-2p';


const FullWidthBox = ({ title }) => {
  return (
    <Box
      sx={{
        width: '95%',
        bgcolor: '#0B0A1A', // Fundo escuro para destacar o neon
        p: 3, // Padding interno
        textAlign: 'center', // Centralizar o texto
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: "'Press Start 2P', cursive", // Fonte estilo 8-bits
          color: '#00e5ff', // Cor neon
          textShadow: `
            0px 0px 6px #00ab9f, 
            0px 0px 10px #00ab9f, 
            0px 0px 6px #00ab9f, 
            0px 0px 10px #00ab9f
          `, // Efeito neon
          fontWeight: 'bold',
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default FullWidthBox;

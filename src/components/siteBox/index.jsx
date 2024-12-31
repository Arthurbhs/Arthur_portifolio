import React from 'react';
import { Box, Typography, styled } from '@mui/material';

// Estilizando o container principal com borda à esquerda e embaixo, com efeito hover
const WideBox = styled('a')(({ theme }) => ({
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
  textDecoration: 'none',
  '&:hover': {
    backgroundColor: "#0f0d24",
    transform: 'scale(1.05)',
    borderLeft: `2px solid ${theme.palette.secondary.main}`,
    borderBottom: `4px solid ${theme.palette.secondary.main}`,
  },
  [theme.breakpoints.down('md')]: {
    height: 'auto',   // Permite que a altura seja automática para acomodar conteúdo
    width: '100%',    // Ocupar a largura total da tela em dispositivos menores
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
    maxWidth: '100%',  // A imagem ocupa até 100% da largura em telas menores
    maxHeight: '50%',
  },
}));

// Estilizando a caixa de texto para o texto quebrar linha corretamente
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

// Componente principal
const InfoBox = ({ imageSrc, title, description, link }) => {
  return (
    <WideBox href={link} target="_blank" rel="noopener noreferrer">
      <Image src={imageSrc} />
      <TextBox>
        {/* O Typography com 'noWrap' removido para permitir quebra de linha */}
        <Typography variant="body1" color="primary" style={{ wordWrap: 'break-word', whiteSpace: 'normal' }}>
          {title}
        </Typography>
        <Typography variant="body2" color="secondary" style={{ wordWrap: 'break-word', whiteSpace: 'normal' }}>
          {description}
        </Typography>
      </TextBox>
    </WideBox>
  );
};

export default InfoBox;

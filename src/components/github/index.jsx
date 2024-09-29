import React from 'react';
import { Fab, styled } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const FloatingButton = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(4),
  right: theme.spacing(10),
  backgroundColor: '#321c4d',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#5600bf',
  },
  [theme.breakpoints.down('sm')]: {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const GitHubButton = () => {
  const handleGitHubRedirect = () => {
    window.open('https://github.com/Arthurbhs', '_blank');
  };

  return (
    <FloatingButton onClick={handleGitHubRedirect} aria-label="GitHub">
      <GitHubIcon />
    </FloatingButton>
  );
};

export default GitHubButton;

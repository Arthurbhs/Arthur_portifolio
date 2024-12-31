// src/App.js
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './theme'; // Verifique se o caminho está correto
import Home from './pages/Home';
import Projects from './pages/Projects'


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projetos" element={<Projects />} />

        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;

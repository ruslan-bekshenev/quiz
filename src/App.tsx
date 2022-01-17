import React from 'react';
import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { WelcomePage } from './pages/Welcome';
import { Container } from './components/layout/Container';

const App = () => {
  return (
    <Box>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/" />
          <Route path="*" element={<div>asd</div>} />
        </Routes>
      </Container>
    </Box>
  );
};

export default App;

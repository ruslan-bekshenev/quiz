import React, { lazy } from 'react';
import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Container } from './components/layout/Container';
import { Suspense } from './components/layout/Suspense';
import { routes } from './utils/routes';

const WelcomePage = lazy(() =>
  import('./pages/Welcome').then((module) => ({ default: module.WelcomePage })),
);

const QuizPage = lazy(() =>
  import('./pages/Quiz').then((module) => ({ default: module.QuizPage })),
);

const App = () => {
  return (
    <Box>
      <Header />
      <Container>
        <Routes>
          <Route
            path={routes.main}
            element={
              <Suspense>
                <WelcomePage />
              </Suspense>
            }
          />
          <Route
            path={routes.quiz}
            element={
              <Suspense>
                <QuizPage />
              </Suspense>
            }
          />
          <Route path="*" element={<div>asd</div>} />
        </Routes>
      </Container>
    </Box>
  );
};

export default App;

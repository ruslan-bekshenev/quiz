import React, { FC } from 'react';
import { Container as MuiContainer } from '@mui/material';

const Container: FC = ({ children }) => {
  return (
    <MuiContainer
      maxWidth="md"
      sx={{
        py: 4,
      }}
    >
      {children}
    </MuiContainer>
  );
};

export default Container;

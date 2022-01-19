import React, { FC } from 'react';
import { Typography } from '@mui/material';

const Title: FC = ({ children }) => (
  <Typography variant="h4" component="h1" gutterBottom>
    {children}
  </Typography>
);

export default Title;

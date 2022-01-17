import React, { FC } from 'react';
import { Paper as MuiPaper } from '@mui/material';

const Paper: FC = ({ children }) => {
  return (
    <MuiPaper elevation={3} sx={{ p: 2 }}>
      {children}
    </MuiPaper>
  );
};

export default Paper;

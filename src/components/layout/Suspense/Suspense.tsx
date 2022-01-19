import { CircularProgress } from '@mui/material';
import React, { FC, Suspense as ReactSuspense } from 'react';

const Suspense: FC = ({ children }) => {
  return <ReactSuspense fallback={<CircularProgress />}>{children}</ReactSuspense>;
};

export default Suspense;

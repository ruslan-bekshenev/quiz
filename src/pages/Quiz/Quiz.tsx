import React from 'react';
import { Box, Typography } from '@mui/material';
import { Paper } from '@/components/layout/Paper';
import Image from '@/assets/images/img.png';
import { Title } from '@/components/typography/Title';
import { ImageContainer } from '@/components/ImageContainer';

const QuizPage = () => {
  return (
    <Paper>
      <Title>Вопрос 1/12</Title>
      <Box mb={2}>
        <ImageContainer src={Image} alt="test" />
      </Box>
      <Typography variant="body1" gutterBottom>
        Кто убил Марка?
      </Typography>
    </Paper>
  );
};

export default QuizPage;

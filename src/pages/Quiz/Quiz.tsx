import React, { useEffect } from 'react';
import { Box, Button, FormControl, Typography } from '@mui/material';
import { Paper } from '@/components/layout/Paper';
import Image from '@/assets/images/img.png';
import { Title } from '@/components/typography/Title';
import { ImageContainer } from '@/components/ImageContainer';
import { GroupControl } from '@/components/form/GroupControl';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getQuizs } from '@/store/quiz/slice';

const QuizPage = () => {
  const { quizs } = useAppSelector((state) => state.quizReducer);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getQuizs());
  }, [dispatch]);

  const options = (quizs[0]?.answers ?? []).map((answer) => ({
    value: answer.title,
    label: answer.title,
  }));
  return (
    <Paper>
      <Title>Вопрос 1/12</Title>
      <Box mb={2}>
        <ImageContainer src={Image} alt="test" />
      </Box>
      <Typography variant="body1" gutterBottom>
        {quizs[0]?.question}
      </Typography>
      <form>
        <FormControl sx={{ marginBottom: 2, display: 'block' }}>
          <GroupControl data={options} />
        </FormControl>
        <Button variant="contained">Следующий вопрос</Button>
      </form>
    </Paper>
  );
};

export default QuizPage;

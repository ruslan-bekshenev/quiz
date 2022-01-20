import { createSlice } from '@reduxjs/toolkit';
import { MOCK } from '@/mock/quiz';
import { IQuizs } from './types';

const initialState: IQuizs = {
  quizs: [],
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    getQuizs: (state) => {
      state.quizs = [...MOCK];
    },
  },
});

export const { getQuizs } = quizSlice.actions;
export default quizSlice.reducer;

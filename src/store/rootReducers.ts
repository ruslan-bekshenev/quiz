import { combineReducers } from '@reduxjs/toolkit';
import quizReducer from '@/store/quiz/slice';

const RootReducers = combineReducers({
  quizReducer,
});

export default RootReducers;

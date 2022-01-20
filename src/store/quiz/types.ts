export interface IAnswer {
  title: string;
  isRight: boolean;
}

export interface IQuestion {
  question: string;
  answers: IAnswer[];
}

export interface IQuizs {
  quizs: IQuestion[];
}

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  topic: 'Current Affairs',
  level: 'Beginner',
  totalQuestions: 4,
  perQuestionScore: 1,
  questions: [
    {
      question: 'Who is the President of India',
      choices: ['Modi', 'Halimah', 'Biden', 'None of the above'],
      type: 'MCQs',
      correctAnswer: 'Modi',
      userChoice: -1,
    },
    {
      question: 'Who is the President of UAE',
      choices: ['Modi', 'Halimah', 'Biden', 'None of the above'],
      type: 'MCQs',
      correctAnswer: 'None of the above',
      userChoice: -1,
    },
    {
      question: 'Who is the President of USA',
      choices: ['Modi', 'Halimah', 'Biden', 'None of the above'],
      type: 'MCQs',
      correctAnswer: 'Biden',
      userChoice: -1,
    },
    {
      question: 'Who is the President of Singapore',
      choices: ['Modi', 'Halimah', 'Biden', 'None of the above'],
      type: 'MCQs',
      correctAnswer: 'Halimah',
      userChoice: -1,
    },
  ],
  userAnswer: [],
  displayQuestionNumber: 0,
};

const quizReducer = createSlice({
  name: 'quiz',
  initialState: initialState,
  reducers: {
    updateAnswer(state, action) {
      const questionNumber = action.payload;
      console.log(`questionNumber ${JSON.stringify(questionNumber, null, 4)}`);

      if (!state.userAnswer.includes(questionNumber)) {
        state.userAnswer.push(action.payload);
      }
    },
    displayQuestion(state, action) {
      state.displayQuestionNumber = action.payload;
    },
    userChoice(state, action) {
      state.questions[state.displayQuestionNumber].userChoice = action.payload;
      console.log(
        `${JSON.stringify(
          state.questions[state.displayQuestionNumber].userChoice,
          null,
          4
        )}`
      );
    },
  },
});

const { actions, reducer } = quizReducer;

export const { updateAnswer, displayQuestion, userChoice } = actions;

export default reducer;

/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    img: null,
    data: null,
    isLoadingData: true,
    gotError: false,
    page: 0,
    itemsPerPage: 1,
  },
  reducers: {
    incrementPage: state => {
      if (state.page < state.data.length - 1) {
        state.page += 1;
      }
    },
    decrementPage: state => {
      if (state.page > 0) {
        state.page -= 1;
      }
    },
    dataLoaded: (state, action) => {
      const { img, results } = action.payload;
      const withNewFields = results.map(el => (
        {
          ...el,
          answers: shuffleArray(el.answers),
          userAnswered: false,
          unsersAnswer: -1,
        }));
      state.data = withNewFields;
      state.img = img;
      state.isLoadingData = false;
      state.gotError = false;
      state.page = 0;
    },
    loadError: state => {
      state.isLoadingData = false;
      state.gotError = true;
    },
    answerQuestion: (state, action) => {
      const { questionID, answerID } = action.payload;
      state.data[questionID].userAnswered = true;
      state.data[questionID].unsersAnswer = answerID;
    },
  },
});

export const fetchQuiz = slug => (async (dispatch, getState) => {
  try {
    const res = await axios.get(`/api/categories/${slug}`);
    dispatch(dataLoaded(res.data));
  } catch (err) {
    dispatch(loadError());
  }
});

export const selectPage = ({ quiz }) => {
  const { img, data, page } = quiz;
  if (data) {
    return { img, data: data[page] };
  }
  return {};
};

export const selectPageId = ({ quiz }) => quiz.page;
export const selectTotalQuestions = ({ quiz }) => quiz.data.length;
export const selectError = ({ quiz }) => quiz.gotError;
export const selectLoading = ({ quiz }) => quiz.isLoadingData;

export const selectTotalAnswers = ({ quiz }) => quiz.data.filter(el => el.userAnswered).length;
export const correctAnswers = ({ quiz }) => quiz.data.filter(el => el.unsersAnswer === 0).length;

export const shuffleArray = array => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export const {
  incrementPage,
  decrementPage,
  dataLoaded,
  loadError,
  answerQuestion,
} = quizSlice.actions;
export default quizSlice.reducer;

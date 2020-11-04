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
      if (state.page < state.data.length) {
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
      state.data = results;
      state.img = img;
      state.isLoadingData = false;
      state.gotError = false;
    },
    loadError: state => {
      state.isLoadingData = false;
      state.gotError = true;
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

export const selectError = ({ quiz }) => quiz.gotError;

export const selectLoading = ({ quiz }) => quiz.isLoadingData;

export const getSlug = name => {
  let normalized = name.split(' ');
  normalized = normalized.map(word => word.charAt(0).toLowerCase() + word.slice(1));
  return normalized.join('_');
};

export const {
  incrementPage,
  decrementPage,
  dataLoaded,
  loadError,
} = quizSlice.actions;
export default quizSlice.reducer;

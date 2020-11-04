/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const categoryPaneSlice = createSlice({
  name: 'categories',
  initialState: {
    data: null,
    isLoadingData: true,
    gotError: false,
    page: 0,
    itemsPerPage: 6,
  },
  reducers: {
    incrementPage: state => {
      if ((state.page + 2) * state.itemsPerPage <= state.data.length) {
        state.page += 1;
      }
    },
    decrementPage: state => {
      if (state.page > 0) {
        state.page -= 1;
      }
    },
    dataLoaded: (state, action) => {
      state.data = action.payload;
      state.isLoadingData = false;
      state.gotError = false;
    },
    loadError: state => {
      state.isLoadingData = false;
      state.gotError = true;
    },
  },
});

export const fetchCategories = () => (async (dispatch, getState) => {
  try {
    const res = await axios.get('/api/categories');
    dispatch(dataLoaded(res.data));
  } catch (err) {
    dispatch(loadError());
  }
});

export const selectPage = ({ categories }) => {
  const { data, page, itemsPerPage } = categories;
  if (data) {
    const start = page * itemsPerPage;
    const end = start + itemsPerPage;
    return categories.data.slice(start, end);
  }
  return [];
};

export const selectError = ({ categories }) => categories.gotError;

export const selectLoading = ({ categories }) => categories.isLoadingData;

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
} = categoryPaneSlice.actions;
export default categoryPaneSlice.reducer;

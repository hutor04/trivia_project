import { configureStore } from '@reduxjs/toolkit';
import categoryPaneReducer from '../components/category_pane/categoryPaneSlice';
import quizReducer from '../components/quiz/quizSlice';

export default configureStore({
  reducer: {
    categories: categoryPaneReducer,
    quiz: quizReducer,
  },
});

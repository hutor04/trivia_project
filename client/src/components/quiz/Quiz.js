import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectPage,
  fetchQuiz,
  selectError,
  selectLoading,
  getSlug,
} from './quizSlice';
import QuestionCard from '../question_card/QuestionCard';

function Quiz() {
  const data = useSelector(selectPage);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchQuiz('books'));
  }, []);
  if (error) {
    return <p>Loading Error...</p>;
  }
  if (loading) {
    return <p>Loading data...</p>;
  }
  return (
    <section >
      <header>
        <h2>{data.data.category}</h2>
      </header>
      <div className={'quiz-main-container'}>
        <QuestionCard />
      </div>
    </section>
  );
}

export default Quiz;

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  decrementPage,
  incrementPage,
  selectPage,
  fetchQuiz,
  selectError,
  selectLoading,
} from './quizSlice';
import QuestionCard from '../question_card/QuestionCard';
import PaginationButton from '../button_pagination/PaginationButton';
import './Quiz.scss';

function Quiz() {
  const data = useSelector(selectPage);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();
  const { slug } = useParams();
  useEffect(() => {
    dispatch(fetchQuiz(slug));
  }, []);
  if (error) {
    return <p>Loading Error...</p>;
  }
  if (loading) {
    return <p>Loading data...</p>;
  }
  return (
    <section>
      <header>
        <h2>{data.data.category}</h2>
      </header>
      <div className={'quiz-container'}>
        <PaginationButton type={'prev'} action={decrementPage}/>
        <QuestionCard />
        <PaginationButton type={'next'} action={incrementPage}/>
      </div>
    </section>
  );
}

export default Quiz;

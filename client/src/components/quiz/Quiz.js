import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
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
    <section className={'quiz-page'}>
      <header>
        <h2>{data.data.category}</h2>
      </header>
      <div className={'quiz-container'}>
        <PaginationButton type={'prev'} action={decrementPage}/>
        <QuestionCard />
        <PaginationButton type={'next'} action={incrementPage}/>
      </div>
      <Link to='/quiz-categories' className={'button-back'}>
        Back to Categories
      </Link>
    </section>
  );
}

export default Quiz;

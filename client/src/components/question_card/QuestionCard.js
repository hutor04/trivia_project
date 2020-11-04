import React from 'react';
import { useSelector } from 'react-redux';
import { selectPage } from '../quiz/quizSlice';

function htmlDecode(input) {
  const doc = new DOMParser().parseFromString(input, 'text/html');
  return doc.documentElement.textContent;
}

function QuestionCard() {
  const question = useSelector(selectPage);
  const { img, data } = question;
  return (
    <article className={'question-container'}>
      <header className={'question-header'}>
        <img src={img}/>
        <div className={'question-progress'}>1 of 10</div>
      </header>
      <div className={'question-text'}>{htmlDecode(data.question)}</div>
    </article>
  );
}

export default QuestionCard;

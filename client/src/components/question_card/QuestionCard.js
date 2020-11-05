import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectPage,
  shuffleArray,
  selectPageId,
  selectTotalQuestions,
} from '../quiz/quizSlice';
import ButtonAnswer from '../button_answer/ButtonAnswer';
import './QuestionCard.scss';

function htmlDecode(input) {
  const doc = new DOMParser().parseFromString(input, 'text/html');
  return doc.documentElement.textContent;
}

function QuestionCard() {
  const question = useSelector(selectPage);
  const pageID = useSelector(selectPageId);
  const totalQuestions = useSelector(selectTotalQuestions);
  const { img, data } = question;
  const shuffledAnswers = shuffleArray(data.answers);

  return (
    <article className={'question-container'}>
      <header className={'question-header'}>
        <img src={img} alt={' '}/>
        <div className={'question-progress'}>{pageID + 1}/{totalQuestions}</div>
      </header>
      <div className={'question-text'}>{htmlDecode(data.question)}</div>
      <div className={'answers-container'}>
        {shuffledAnswers.map(({ id, answer }) => (
            <ButtonAnswer key={id} answerID={id} answer={htmlDecode(answer)}/>
        ))}
      </div>
    </article>
  );
}

export default QuestionCard;

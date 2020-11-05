import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { answerQuestion, selectPage } from '../quiz/quizSlice';
import './ButtonAnswer.scss';

function ButtonAnswer({
  questionID,
  answerID,
  answer,
}) {
  const dispatch = useDispatch();
  const question = useSelector(selectPage);
  if (question.data.userAnswered) {
    if (answerID === 0) {
      return <div className={'button-answer correct'} >{answer}</div>;
    }
    if (question.data.unsersAnswer === answerID) {
      return <div className={'button-answer answer'} >{answer}</div>;
    }
    return <div className={'button-answer disabled'} >{answer}</div>;
  }
  return (
    <div
      className={'button-answer'}
      onClick={() => dispatch(answerQuestion({ questionID, answerID }))}
    >
      {answer}
    </div>
  );
}

export default ButtonAnswer;

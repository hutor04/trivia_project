import React from 'react';
import './ButtonAnswer.scss';

function ButtonAnswer({
  questionID,
  answerID,
  answer,
  action,
}) {
  return (
    <div className={'button-answer'}>{answer}</div>
  );
}

export default ButtonAnswer;

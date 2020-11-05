import React from 'react';
import { useDispatch } from 'react-redux';
import './PaginationButton.scss';

function PaginationButton({ type, action }) {
  const dispatch = useDispatch();
  const direction = type === 'next' ? 'triangle-right' : 'triangle-left';
  return (
    <div className={'pane-button-container'}>
      <div className={direction} onClick={() => dispatch(action())}>
        <div className="inner-triangle"></div>
      </div>
    </div>
  );
}

export default PaginationButton;

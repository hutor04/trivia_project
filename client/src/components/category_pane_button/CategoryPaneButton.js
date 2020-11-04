import React from 'react';
import { useDispatch } from 'react-redux';
import {
  incrementPage,
  decrementPage,
} from '../category_pane/categoryPaneSlice';
import './CategoryPaneButton.scss';

function CategoryPaneButton({ type }) {
  const dispatch = useDispatch();
  const direction = type === 'next' ? 'triangle-right' : 'triangle-left';
  const action = type === 'next' ? incrementPage : decrementPage;
  return (
    <div className={'pane-button-container'}>
      <div className={direction} onClick={() => dispatch(action())}>
        <div className="inner-triangle"></div>
      </div>
    </div>
  );
}

export default CategoryPaneButton;

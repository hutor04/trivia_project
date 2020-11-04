import React from 'react';
import './CategoryTile.scss';

function CategoryTile({ catName, catIcon }) {
  return (
    <article className={'tile-container'}>
      <div className={'tile-icon'}><img src={catIcon} alt={catName}/></div>
      <div className={'tile-text'}>{catName}</div>
    </article>
  );
}

export default CategoryTile;

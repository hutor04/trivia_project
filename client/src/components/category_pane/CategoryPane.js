import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  selectPage,
  fetchCategories,
  selectError,
  selectLoading,
  getSlug,
  incrementPage,
  decrementPage,
} from './categoryPaneSlice';
import CategoryTile from '../category_tile/CategoryTile';
import PaginationButton from '../button_pagination/PaginationButton';
import './CategoryPane.scss';

function CategoryPane() {
  const data = useSelector(selectPage);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
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
        <h2>Pick a Category</h2>
      </header>
      <div className={'category-pane'}>
        <PaginationButton type={'prev'} action={decrementPage}/>
        <div className={'container-category-pane'}>
          {data.map(cat => {
            const slug = getSlug(cat.name);
            const path = `/quiz/${slug}`;
            return (
                <Link to={path}>
                  <CategoryTile key={slug} catName={cat.name} catIcon={cat.img}/>
                </Link>
            );
          })}
        </div>
        <PaginationButton type={'next'} action={incrementPage}/>
      </div>
    </section>
  );
}

export default CategoryPane;

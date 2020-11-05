import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

function Home() {
  return (
    <div className={'home-splash'}>
      <Link to='/quiz-categories' className={'home-splash-button'}>
        Start Quiz!
      </Link>
    </div>
  );
}

export default Home;

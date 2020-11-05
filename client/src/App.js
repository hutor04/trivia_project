import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';
import Home from './components/home_page/Home';
import CategoryPane from './components/category_pane/CategoryPane';
import Quiz from './components/quiz/Quiz';
import './App.scss';
import logo from './img/lemon.svg';

function App() {
  return (
    <Router>
      <div className="main-container">
        <header className="main-header">
          <NavLink to='/'>
            <div className={'logo'}>
              <div>Quizzy</div>
              <img src={logo} alt={'logo'}/>
              <div>Quizz</div>
            </div>
          </NavLink>
        </header>
        <div className="main-content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/quiz-categories">
              <CategoryPane />
            </Route>
            <Route exact path="/quiz/:slug">
              <Quiz />
            </Route>
          </Switch>
        </div>
        <footer className="main-footer">
          <p>YK 2020</p>
          <i className="fab fa-github fa-2x"></i>
        </footer>
      </div>
    </Router>
  );
}

export default App;

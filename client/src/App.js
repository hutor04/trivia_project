import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CategoryPane from './components/category_pane/CategoryPane';
import Quiz from './components/quiz/Quiz';

function App() {
  return (
    <Router>
      <div className="main-container">
        <header className="main-header">
          <h1>Quizzy Quizz</h1>
        </header>
        <div className="main-content">
          <Switch>
            <Route exact path="/quiz-categories">
              <CategoryPane />
            </Route>
            <Route exact path="/quiz/:category">
              <Quiz />
            </Route>
          </Switch>
        </div>
        <footer className="footer">
          <p>YK 2020</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;

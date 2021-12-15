import './App.css';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import Characters from './views/Characters/CharactersList';
import Films from './views/Films/Films';
import Books from './views/Books/BookList';

function App() {
  return (
    <>
      <div className="App"></div>
      <BrowserRouter>
        <header>
          <NavLink to="/" data-testid="main-link">
            Main
          </NavLink>
          <NavLink to="/films" data-testid="film-link">
            Films
          </NavLink>
          <NavLink to="/characters" datat-testid="char-link">
            Characters
          </NavLink>
          <NavLink to="/books" data-testid="book-link">
            Books
          </NavLink>
        </header>
        <Switch>
          <Route exact path="/films">
            <Films />
          </Route>
          <Route path="/characters">
            <Characters />
          </Route>
          <Route path="/books">
            <Books />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

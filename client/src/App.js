import React from 'react';
import Main from './Pages/Main/Main'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <div id='App'>
        <Router>
          <div>
            <Switch>
              <Route exact path='/' component={Main} />
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;

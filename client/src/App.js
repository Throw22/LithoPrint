import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    window.scrollTo(0, 0);
    return (
      <div className="App">
        <Router>
          <div className="app-body">
            <Switch>
              <Route exact path="/" render={() => <h1>Landing Page</h1>} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

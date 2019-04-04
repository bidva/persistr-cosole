import React, { Component } from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import {history} from '../helpers';
import {PrivateRoute} from "../components/PrivateRoute"
import Account from "../components/Account/Account";
import Login from "../components/Login/Login";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Switch>
            <PrivateRoute path="/account" component={Account}/>
            <Route render={(props) => <Login/>} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

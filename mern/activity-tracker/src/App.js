import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SignIn from './pages/SignIn.jsx';

function App() {
  return (
    <Router>
      <Switch>
        <SignIn></SignIn>
        <Route path="/sign-up">
          Signup
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

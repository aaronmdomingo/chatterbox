import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import LandingPage from './routes/landing-page/landing-page';
import Dashboard from './routes/dashboard/dashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <LandingPage />
        </Route>
        <Route path='/dashboard/:user'>
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

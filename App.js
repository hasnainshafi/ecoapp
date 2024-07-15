import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}
import AddActivity from './components/AddActivity';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          {/* existing routes */}
          <Route path="/add-activity" component={AddActivity} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home user={user} setUser={setUser} />
        </Route>
        {/* Add other routes as needed */}
      </Switch>
    </Router>
  );
}

export default App;

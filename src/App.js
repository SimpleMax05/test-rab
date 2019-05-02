import React from 'react';
import Navigate from './components/navigation'
import Home from './components/home'

import { BrowserRouter as Router, Route, Link } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Navigate />
      <Router>
        <Route path="/" component={Home} />
      </Router>
    </div>
  );
}

export default App;

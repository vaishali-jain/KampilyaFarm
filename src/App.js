import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import ContactDetails from './components/pages/ContactDetails';
import Saptarishi from './components/pages/Saptarishi';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/saptarishi' component={Saptarishi} />
          <Route path='/contactdetails' component={ContactDetails} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

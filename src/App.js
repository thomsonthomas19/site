import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Home from './Components/Pages/Home';
import Portfolio from './Components/Pages/Portfolio'
import Navbar from './Components/Pages/Navbar/Navbar';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/portfolio" component={Portfolio}/>
      </div>
    </Router>
  )
}

export default App;

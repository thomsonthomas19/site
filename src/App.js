import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Home from './Components/Pages/Home';
import Portfolio from './Components/Pages/Portfolio';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
        </div>
      </Router>

      <Footer />
    </div>
  )
}

export default App;

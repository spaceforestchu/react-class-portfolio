import React, { Component } from 'react';
import './App.css';
import { Contact, About, Footer, Header, Portfolio, Testimonials, Home } from './Components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <About />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;

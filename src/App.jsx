import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Exercise from './components/Exercise';

const App = () => {
  return (
   <>
        <Navbar />
        <Home />
        <Exercise />
        <Footer />
   </>
    
  );
};

export default App;
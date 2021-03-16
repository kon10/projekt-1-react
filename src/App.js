import React from 'react';
import './App.css';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import LandingPage from './Components/LandingPage/LandingPage';
import Nav from './Components/Nav/Nav';
import Offers from './Components/Offers/Offers';


function App() {
  return (
    <>
      <Nav></Nav>
      <main>
        <LandingPage />
        <About />
        <Offers />
        <Footer />
      </main>
    </>
  );
}

export default App;

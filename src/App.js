import React from 'react';
import "./App.css";
import Header from './components/header/header';
import Home from './components/home/home';
import About from './components/about/about'; 
import Skills from './components/skills/skills';
import Qualification from './components/qualification/qualification';
import Work from './components/work/work';
import Contact from './components/contact/contact'
import ScrollUp from './components/scrollup/scrollup';

const App = () => {
  return(
    <>
    <Header />

    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Qualification />
      <Work />
      <Contact />
    </main>
    <ScrollUp />
    </>
  )
}

export default App
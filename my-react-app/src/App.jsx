import React from 'react';
import './App.css'
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';
import Section3 from './components/Section3/Section3';
import Section4 from './components/Section4/Section4';
import Stores from './components/Stores/Stores';


function App() {

  return (
    <div className="App">
     <Header/>
     <Menu/>
     <Section1/>
     <Section2/>
     <Section3/>
     <Section4/>
     <Footer/>
    </div>
  )
}

export default App

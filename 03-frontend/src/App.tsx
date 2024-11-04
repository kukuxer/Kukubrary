import React from 'react';
import './App.css';
import { Navbar } from './layouts/Navbar-and-Footer/Navbar';
import { Footer } from './layouts/Navbar-and-Footer/Footer';
import { HomePage } from './layouts/HomePage/HomePage';

 export const App = () => {
  return (
    <>
      <Navbar/>
      <HomePage/>
      <Footer/>
    </>
  );
}

export default App;

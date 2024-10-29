import React from 'react';
import './App.css';
import { Navbar } from './layouts/Navbar-and-Footer/Navbar';
import { ExploreTopBooks } from './layouts/HomePage/ExploreTopBooks';
import { Carousel } from './layouts/HomePage/Carousel';

function App() {
  return (
    <>
      <Navbar/>
      <ExploreTopBooks/>
      <Carousel/>
    </>
  );
}

export default App;

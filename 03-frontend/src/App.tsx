import React from 'react';
import './App.css';
import { Navbar } from './layouts/Navbar-and-Footer/Navbar';
import { Footer } from './layouts/Navbar-and-Footer/Footer';
import { HomePage } from './layouts/HomePage/HomePage';
import { SearchBooksPage } from './layouts/SearchBooksPage/SearchBooksPage';

 export const App = () => {
  return (
    <>
      <Navbar/>
      {/* <HomePage/> */}
      <SearchBooksPage/>
      <Footer/>
    </>
  );
}

export default App;

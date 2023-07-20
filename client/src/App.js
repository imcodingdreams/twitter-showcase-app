import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
// import { TweetCard } from './components/TweetCard';
import { SearchInput } from './components/SearchInput';
//import { Header } from './components/Header.js';
import { HomePage } from './components/HomePage';
import { RandomTweetPage } from './components/RandomTweetPage.js';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchInput />} />
        <Route path="/randomtweet" element={<RandomTweetPage />} />
      </Routes>
    </>
  )
}

export default App;



/* (
    <div className="App">
      <Navbar />
      <HomePage />
      <SearchInput />
      <RandomTweetPage />
      <TweetCard />
    </div>
  ); */
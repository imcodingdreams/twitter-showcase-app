import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import { TweetCard } from './components/TweetCard';
import { SearchInput } from './components/SearchInput';
//import { Header } from './components/Header.js';
import { HomePage } from './components/HomePage';
import { RandomTweetPage } from './components/RandomTweetPage.js';

function App() {
  return (
    <div className="App">
      <h2>Hello World</h2>
      <Navbar />
      <HomePage />
      <SearchInput />
      <RandomTweetPage />
      <TweetCard />
    </div>
  );
}

export default App; 
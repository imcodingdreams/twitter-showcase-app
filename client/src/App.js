
import './App.css';
import Navbar from './components/Navbar.js';
import { SearchPage } from './components/SearchPage';
import { HomePage } from './components/HomePage';
import { RandomTweetPage } from './components/RandomTweetPage.js';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/randomtweet" element={<RandomTweetPage />} />
      </Routes>
    </div>
  )
}

export default App;
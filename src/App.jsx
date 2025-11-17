import React from 'react';
import './App.css'; 

// Import the components we will create
import Header from './components/Header';
import Introduction from './components/Introduction';
import MovieList from './components/MovieList';
import Preferences from './components/Preferences';

// --- Placeholder Data (REPLACE THIS) ---
const myMovies = [
  {
    title: "The Silent Watchman",
    genre: "Sci-Fi / Mystery",
    love: "The film masterfully uses sound design to build tension. The plot twists are genuinely unexpected, making it a perfect blend of high-concept sci-fi and classic noir.",
  },
  {
    title: "La Danse de la Pluie",
    genre: "Drama / Romance",
    love: "Every frame is a painting. The performances are incredibly subtle, conveying deep emotion without a single wasted word. It reminds me that true love is often quiet and resilient.",
  },
  {
    title: "Furious Freight",
    genre: "Action / Thriller",
    love: "Pure adrenaline rush from start to finish. The practical effects and stunts are some of the best ever filmed—no CGI overload, just raw, visceral, edge-of-your-seat action.",
  },
  {
    title: "A Night in the Archives",
    genre: "Historical Comedy",
    love: "A refreshingly smart comedy that pokes fun at academia. The dialogue is sharp, the historical inaccuracies are played for laughs, and the cast has amazing chemistry.",
  },
];

const moviePreferences = {
  favoriteGenres: ["Neo-Noir", "Period Dramas", "High-Concept Sci-Fi"],
  favoriteDirector: "Denis Villeneuve",
  watchingFrequency: "Weekly binge-watcher, usually Friday nights.",
};
// ----------------------------------------


function App() {
  return (
    <div className="movie-showcase">
      <Header />
      <main>
        <Introduction />
        <MovieList movies={myMovies} />
        <Preferences preferences={moviePreferences} />
      </main>
    </div>
  );
}

export default App;
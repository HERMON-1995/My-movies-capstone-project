import './style.css';
import getSelectedShows from './modules/tvmaze.js';
import generateMovieTile from './modules/movies.js';

const initialize = async () => {
  const selectedShows = await getSelectedShows();
  const moviesContainer = document.querySelector('main');

  selectedShows.forEach(async (show) => {
    const movieTile = await generateMovieTile(show);
    moviesContainer.appendChild(movieTile);
  });
};

initialize();

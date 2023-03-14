import './style.css';
import { getSelectedShows } from './modules/tvmaze';
import { generateMovieTile } from './modules/movies';

const initialize = async () => {
  const selectedShows = await getSelectedShows();
  const moviesContainer = document.querySelector('main');

  selectedShows.forEach((show) => {
    const movieTile = generateMovieTile(show);
    moviesContainer.appendChild(movieTile);
  });
};

initialize();

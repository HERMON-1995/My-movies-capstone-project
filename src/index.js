import './style.css';
import getSelectedShows from './modules/tvmaze.js';
import generateMovieTile from './modules/movies.js';
import countMovies from './modules/movies-counter.js';
import { createComment } from './modules/invlovement.js';

const initialize = async () => {
  const selectedShows = await getSelectedShows();
  const moviesContainer = document.querySelector('main');

  for (let i = 0; i < selectedShows.length; i += 1) {
    const movieTile = await generateMovieTile(selectedShows[i]);
    moviesContainer.appendChild(movieTile);
  }

  const movieCount = countMovies();
  const countDisplay = document.querySelector('#count-display');
  countDisplay.innerHTML = `(${movieCount})`;

  const form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    createComment();
  });
};

initialize();

/* eslint-disable import/no-cycle */
import './style.css';
import getSelectedShows from './modules/tvmaze.js';
import generateMovieTile from './modules/movies.js';

const initialize = async () => {
  const selectedShows = await getSelectedShows();
  const moviesContainer = document.querySelector('main');

  selectedShows.forEach((show) => {
    const movieTile = generateMovieTile(show);
    moviesContainer.appendChild(movieTile);
  });
};

initialize();

const popup = document.querySelector('.popup');
const main = document.querySelector('main');
const closeBtn = document.querySelector('.close-btn');
const popImage = document.querySelector('.popup-img');
const popTitle = document.querySelector('.pop-name');
const type = document.querySelector('.type');
const language = document.querySelector('.language');

const showPopup = (movie) => {
  popup.classList.toggle('active');
  main.classList.toggle('hide');
  popImage.src = movie.image.original;
  popTitle.innerHTML = movie.name;
  type.innerHTML = movie.type;
  language.innerHTML = movie.language;
};

const closePopup = () => {
  popup.classList.toggle('active');
  main.classList.toggle('hide');
};

closeBtn.addEventListener('click', closePopup);

export default showPopup;

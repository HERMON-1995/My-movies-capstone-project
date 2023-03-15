import showPopup from './popup.js';

const generateMovieTile = (movie) => {
  const movieTile = document.createElement('div');
  movieTile.classList.add('movie-tile');
  movieTile.innerHTML = `
    <div class="movie-poster">
      <img src="${movie.image.original}" alt="${movie.name}">
    </div>
    <div class="movie-info">
      <h3 class="movie-title">${movie.name}</h3>
      <i class="fa-regular fa-heart"></i>
    </div>
    <div class="movie-interactions">
      <button>Comments</button>
    </div>
  `;

  const commentsButton = movieTile.querySelector('.movie-interactions > button');
  commentsButton.addEventListener('click', () => {
    showPopup(movie);
  });

  const likeButton = movieTile.querySelector('.fa-heart');
  likeButton.addEventListener('click', () => {
    // Add like button code here
  });

  return movieTile;
};

export default generateMovieTile;

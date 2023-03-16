import { addLike, getMovieLikes, setMovieId } from './invlovement.js';
import showPopup from './popup.js';

const generateMovieTile = async (movie) => {
  const numberOfLikes = await getMovieLikes(movie.id);
  let likesText = numberOfLikes === 1 ? `${numberOfLikes}&nbsp;Like` : `${numberOfLikes}&nbsp;Likes`;

  const movieTile = document.createElement('div');
  movieTile.classList.add('movie-tile');
  movieTile.innerHTML = `
    <div class="movie-poster">
      <img src="${movie.image.original}" alt="${movie.name}">
    </div>
    <div class="movie-info">
      <h3 class="movie-title">${movie.name}</h3>
      <div class="movie-likes">
        <i class="fa-regular fa-heart"></i>
        <div>${likesText}</div>
      </div>
    </div>
    <div class="movie-interactions">
      <button>Comments</button>
    </div>
  `;

  const commentsButton = movieTile.querySelector('.movie-interactions > button');
  commentsButton.addEventListener('click', () => {
    setMovieId(movie.id);
    showPopup(movie);
  });

  const likeButton = movieTile.querySelector('.fa-heart');

  likeButton.addEventListener('click', async () => {
    likeButton.classList.remove('fa-heart');
    likeButton.classList.remove('fa-regular');
    likeButton.classList.add('fa-spinner');
    likeButton.classList.add('fa-solid');
    await addLike(movie.id);
    const numberOfLikes = await getMovieLikes(movie.id);
    likesText = numberOfLikes === 1 ? `${numberOfLikes}&nbsp;Like` : `${numberOfLikes}&nbsp;Likes`;
    movieTile.querySelector('.movie-likes > div').innerHTML = likesText;
    likeButton.classList.remove('fa-spinner');
    likeButton.classList.remove('fa-solid');
    likeButton.classList.add('fa-heart');
    likeButton.classList.add('fa-regular');
  });

  return movieTile;
};

export default generateMovieTile;

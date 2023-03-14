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
    // Add comments popup code here
    console.log('Comments button clicked', movie);
  });

  const likeButton = movieTile.querySelector('.fa-heart');
  likeButton.addEventListener('click', () => {
    // Add like button code here
    console.log('Like button clicked', movie);
  });

  return movieTile;
};

export { generateMovieTile };

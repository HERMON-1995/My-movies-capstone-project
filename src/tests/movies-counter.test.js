/**
 * @jest-environment jsdom
 */

import countMovies from '../modules/movies-counter.js';

describe('Test movie counter', () => {
  it('Should return 0 when there are no movies on the page', () => {
    // Arrange
    document.body.innerHTML = `
      <main></main>
    `;

    // Act
    const movieCount = countMovies();

    // Assert
    expect(movieCount).toBe(0);
  });

  it('Should count all movies displayed on the page', () => {
    // Arrange
    document.body.innerHTML = `
      <main></main>
    `;
    const movieContainer = document.querySelector('main');
    const movie1 = document.createElement('div');
    const movie2 = document.createElement('div');
    const movie3 = document.createElement('div');
    [movie1, movie2, movie3].forEach((movieTile) => movieTile.classList.add('movie-tile'));
    movieContainer.append(movie1, movie2, movie3);

    // Act
    const movieCount = countMovies();

    // Assert
    expect(movieCount).toBe(3);
  });
});

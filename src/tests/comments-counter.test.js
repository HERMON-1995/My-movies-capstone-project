/**
 * @jest-environment jsdom
 */

import countComments from '../modules/comments-counter.js';

describe('Test when there are no comments', () => {
  test('Should expect zero when there are no comments', () => {
    // Arrange
    document.body.innerHTML = `
      <div class="comment-section">
        <h3 class="comment-counter"></h3>
        <ul class="comments"></ul>
      </div>
    `;

    // Act
    const commentCount = countComments();

    // Assert
    expect(commentCount).toBe(0);
  });
});

describe('Test when there are comments', () => {
  test('Should count all comments diplayed on the popup page', () => {
    // Arrange
    document.body.innerHTML = `
      <div class="comment-section">
        <h3 class="comments-counter"></h3>
        <ul class="comments">
          <li class="usercomments">Comment 1</li>
          <li class="usercomments">Comment 2</li>
          <li class="usercomments">Comment 3</li>
          <li class="usercomments">Comment 4</li>
        </ul>
      </div>
    `;

    // Act
    const commentCount = countComments();

    // Assert
    expect(commentCount).toBe(4);
  });
});

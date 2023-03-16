/**
 * @jest-environment jsdom
 */

import commentCounter from '../modules/comments-counter.js';

describe('Test when there are no comments', () => {
  test('Should expect zero when there are no comments', () => {
    // Arrange
    const commentsArr = [];
    const header = document.createElement('h3');

    // Act
    const commentCount = commentCounter(commentsArr, header);

    // Assert
    expect(commentCount).toBe(0);
  });
});

describe('Test when there are comments', () => {
  test('Should count all comments diplayed on the popup page', () => {
    // Arrange
    const header = document.createElement('h3');
    const commentsArr = [
      {
        comment: 'This is nice!',
        creation_date: '2021-01-10',
        username: 'John',
      },
      {
        comment: 'Great content!',
        creation_date: '2021-02-10',
        username: 'Jane',
      },

    ];

    // Act
    const commentCount = commentCounter(commentsArr, header);

    // Assert
    expect(commentCount).toBe(2);
  });
});
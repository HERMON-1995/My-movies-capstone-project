import commentCounter from './comments-counter.js';

const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
const appID = 'NPgV5E1zHcIqM2oujsnW';
const commentList = document.querySelector('.comments');

const getLikes = async () => {
  const response = await fetch(`${baseUrl}/apps/${appID}/likes`);
  const data = await response.text();
  return data;
};

const getMovieLikes = async (id) => {
  let allLikes = await getLikes();
  allLikes ||= '[]';
  allLikes = JSON.parse(allLikes);

  const like = allLikes.find((like) => like.item_id === id);
  if (like) {
    return like.likes;
  }
  return 0;
};

const addLike = async (id) => {
  const response = await fetch(`${baseUrl}/apps/${appID}/likes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  });
  const data = await response.text();
  return data;
};

let movieId;

const setMovieId = (id) => {
  movieId = `movie${id}`;
};

const getMovieId = () => movieId;

const getComments = async (itemId) => {
  try {
    const url = `${baseUrl}/apps/${appID}/comments?item_id=${itemId}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
};

const commentTitle = document.querySelector('.comment-counter');

const displayComments = async (itemId) => {
  commentList.innerHTML = '';
  commentTitle.innerHTML = 'Comments (0)';
  const comments = await getComments(itemId);

  comments.forEach((comment) => {
    const li = document.createElement('li');
    li.className = 'usercomments';
    li.innerHTML = `<span class="date">|${comment.creation_date}|</span>📽️<span class="date">${comment.username}: </span><span class="date">"${comment.comment}"</span>`;
    commentList.appendChild(li);
  });

  const numComments = commentCounter();
  commentTitle.innerHTML = `Comments (${numComments})`;
};

const addComment = async (itemId, name, comment) => {
  const url = `${baseUrl}/apps/${appID}/comments`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: itemId,
      username: name,
      comment,
    }),
  });
  const data = await response.text();
  displayComments(itemId);
  return data || null;
};

const createComment = () => {
  const usernameField = document.querySelector('.name');
  const commentField = document.querySelector('.comment');
  const username = usernameField.value;
  const comment = commentField.value;

  addComment(movieId, username, comment);

  usernameField.value = '';
  commentField.value = '';
};

export {
  addLike,
  getMovieLikes,
  setMovieId,
  getMovieId,
  createComment,
  displayComments,
};

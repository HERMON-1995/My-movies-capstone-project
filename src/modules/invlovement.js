const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
const appID = 'NPgV5E1zHcIqM2oujsnW';

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

export {
  addLike,
  getMovieLikes,
};

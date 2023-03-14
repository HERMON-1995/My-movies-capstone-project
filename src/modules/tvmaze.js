const baseUrl = 'https://api.tvmaze.com';

const shows = [270, 245, 650, 840, 1220, 1200];

const getShow = async (id) => {
  const response = await fetch(`${baseUrl}/shows/${id}`);
  const show = await response.json();
  return show;
};

const getSelectedShows = async () => {
  const showsData = [];
  for (let i = 0; i < shows.length; i += 1) {
    const show = await getShow(shows[i]);
    showsData.push(show);
  }
  return showsData;
};

export default getSelectedShows;

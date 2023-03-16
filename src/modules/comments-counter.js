const commentCounter = (data, element) => {
  if (data.length) {
    element.innerHTML = `Comments(${data.length})`;
  }
  return data.length;
};

export default commentCounter;
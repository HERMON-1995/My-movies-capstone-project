const commentCounter = () => {
  const comments = document.querySelectorAll('.usercomments');
  return comments.length;
};

export default commentCounter;

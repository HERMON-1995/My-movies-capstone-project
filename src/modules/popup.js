const popup = document.querySelector('.popup-container');
const closeBtn = document.querySelector('.close-btn');
const popupImage = document.querySelector('.popup-img');
const popupTitle = document.querySelector('.popup-name');
const popupType = document.querySelector('.popup-type');
const popupLanguage = document.querySelector('.popup-language');

const showPopup = (movie) => {
  popup.classList.toggle('active');
  popupImage.src = movie.image.original;
  popupTitle.innerHTML = movie.name;
  popupType.innerHTML = movie.type;
  popupLanguage.innerHTML = movie.language;
};

const closePopup = () => {
  popup.classList.toggle('active');
};

closeBtn.addEventListener('click', closePopup);

export default showPopup;

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileEditCloseButton = profileEditModal.querySelector(
  "#modal-close-button"
);

const profileModalContainer = document.querySelector("#modal-container");
const profileTitle = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const profileEditForm = profileEditModal.querySelector("#edit-profile-form");
const addCardFormEl = profileEditModal.querySelector("#add-card-form");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const cardListEl = document.querySelector(".cards__list");
const addNewCardModal = document.querySelector("#profile-add-modal");
const addNewCardForm = addNewCardModal.querySelector("#add-card-form");
const addNewCardButton = document.querySelector(".profile__add-button");
const addNewCardCloseButton = document.querySelector("#add-modal-close-button");
const cardTitleInput = document.querySelector(".modal__input_type_title");
const cardLinkInput = document.querySelector("#profile__input-type-URL");
const previewImageModal = document.querySelector("#modal__image-preview");
const previewImageClose = document.querySelector("#modal__close-preview");
const previewImageTitle = document.querySelector(".modal__preview-title");
const previewImagePic = document.querySelector(".preview__image");

function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup(profileEditModal);
}

function openPopup(popup) {
  popup.classList.add("modal_opened");
}

function closePopup(popup) {
  popup.classList.remove("modal_opened");
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");
  const likebutton = cardElement.querySelector(".card__like-button");

  likebutton.addEventListener("click", () => {
    likebutton.classList.toggle("card__like-button_active");
  });
  const cardDeleteButton = cardElement.querySelector(".card__delete-button");
  cardDeleteButton.addEventListener("click", () => {
    cardElement.remove();
  });
  cardImage.addEventListener("click", () => {
    previewImagePic.src = cardData.link;
    previewImagePic.alt = cardData.name;
    previewImageTitle.textContent = cardData.name;
    openPopup(previewImageModal);
  });

  cardTitleEl.textContent = cardData.name;
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  return cardElement;
}

function renderCardElement(cardData, cardListEl) {
  const cardElement = getCardElement(cardData);
  cardListEl.prepend(cardElement);
}

profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openPopup(profileEditModal);
});

profileEditCloseButton.addEventListener("click", () => {
  closePopup(profileEditModal);
});

previewImageClose.addEventListener("click", () => {
  closePopup(previewImageModal);
});

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

initialCards.forEach((cardData) => renderCardElement(cardData, cardListEl));

addNewCardButton.addEventListener("click", () => {
  openPopup(addNewCardModal);
});

addNewCardForm.addEventListener("submit", handleAddCardFormSubmit);

addNewCardCloseButton.addEventListener("click", () => {
  closePopup(addNewCardModal);
});

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  const name = cardTitleInput.value;
  const link = cardLinkInput.value;
  renderCardElement({ name, link }, cardListEl);
  addNewCardForm.reset();
  closePopup(addNewCardModal);
}

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closePopup(profileEditModal);
  }
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closePopup(addNewCardModal);
  }
});

profileEditModal.addEventListener("click", (e) => {
  if (e.target === profileEditModal) {
    closePopup(profileEditModal);
  }
});

addNewCardModal.addEventListener("click", (e) => {
  if (e.target === addNewCardModal) {
    closePopup(addNewCardModal);
  }
});

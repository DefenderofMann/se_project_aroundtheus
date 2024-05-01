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
const profileTitleinput = document.querySelector("#profile-title-input");
const profileDescriptioninput = document.querySelector(
  "#profile-description-input"
);
const profileEditform = profileEditModal.querySelector(".modal__form");

function closepopop() {
  profileEditModal.classList.remove("modal_opened");
}

profileEditButton.addEventListener("click", () => {
  profileEditModal.classList.add("modal_opened");
});

profileEditButton.addEventListener("click", () => {
  profileTitleinput.value = profileTitle.textContent;
  profileDescriptioninput.value = profileDescription.textContent;
  profileEditModal.classList.add("modal_opened");
});

profileEditCloseButton.addEventListener("click", () => {
  closepopop();
});

profileEditform.addEventListener("submit", (e) => {
  e.preventDefault();
  profileTitle.textContent = profileTitleinput.value;
  profileDescriptioninput.textContent = profileDescription.value;
  closepopop();
});

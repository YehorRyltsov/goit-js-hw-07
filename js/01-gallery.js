import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const cardsGalleryMarkup = createCardsGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", cardsGalleryMarkup);

function createCardsGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ description, original, preview }) => {
      return `<div class="gallary__item">
            <a class = "gallary__link"
        href = "${original}" >
            <img class= "gallery__image" src= "${preview}"
            data-source="${original}"
            alt = "${description}" /> </a >
    </div>`;
    })
    .join(" ");
}
galleryContainer.addEventListener("click", onClick);
function onClick(evn) {
  console.log(evn.target.dataset);
  evn.preventDefault(0);
  if (evn.target.nodeName !== "IMG") {
    return;
  }
  let original = evn.target.dataset.source;
  let instance = basicLightbox.create(`
    <img src="${original}" >
`);

  instance.show();
}

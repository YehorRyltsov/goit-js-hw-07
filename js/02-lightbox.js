import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");
const cardsGalleryMarkup = createCardsGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", cardsGalleryMarkup);

function createCardsGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ description, original, preview }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join(" ");
}
new SimpleLightbox(".gallery a");
console.log(galleryItems);

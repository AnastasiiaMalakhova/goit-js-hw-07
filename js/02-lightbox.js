import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryList = document.querySelector(".gallery");
galleryList.remove();
const paragraph = document.querySelector("p");
const gallery = document.createElement("div");
gallery.classList.add("gallery");
paragraph.after(gallery);

const galleryImg = createGalleryImg(galleryItems);

function createGalleryImg(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
          
        />
      </a>`
    )
    .join("");
}

gallery.innerHTML = galleryImg;

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  fadeSpeed: 250,
});

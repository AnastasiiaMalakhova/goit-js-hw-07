import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const galleryImg = createGalleryImg(galleryItems);

gallery.addEventListener("click", returnUrlBigImg);

function createGalleryImg(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
          
        />
      </a>
    </div>
        `
    )
    .join("");
}
// gallery.insertAdjacentHTML("afterbegin", galleryImg);
gallery.innerHTML = galleryImg;

function returnUrlBigImg(e) {
  e.preventDefault();
  function closeModalForEsc(evt) {
    if (evt.key === "Escape") {
      bigImg.close();
    }
  }

  if (e.target.nodeName !== "IMG") {
    return;
  }

  const bigImg = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
  `);
  bigImg.show();

  gallery.addEventListener("keydown", closeModalForEsc);
  gallery.addEventListener("keydown", () => {
    gallery.removeEventListener("keydown", closeModalForEsc);
  });
}

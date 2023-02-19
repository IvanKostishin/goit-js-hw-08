import { galleryItems } from './gallery-items.js';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryItemMarkup = createGallery(galleryItems);

const galleryContainer = document.querySelector('.gallery');

function createGallery(items) {
    return items.map(item => `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}" onclick="return false;" rel="noreferrer noopener">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`).join('');
}

galleryContainer.innerHTML = galleryItemMarkup;

let lightbox = new SimpleLightbox(".gallery a", {
    captionDelay: 250,
    captionsData: "alt",
     captionPosition: "bottom"
})

import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryBox = document.querySelector('.gallery');

function createGalleryElement(el) {
  return `<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${el.preview}"
      data-source="${el.original}"
      alt="${el.description}"
    />
  </a>
</li>`
}

const createdGallery = galleryItems.map(createGalleryElement).join('');
galleryBox.insertAdjacentHTML('beforeend', createdGallery);
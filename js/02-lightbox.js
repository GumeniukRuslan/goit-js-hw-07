import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryBox = document.querySelector('.gallery');

function createGalleryElement(el) {
  return `<li class="gallery__item">
  <a class="gallery__link" href="${el.original}">
    <img
      class="gallery__image"
      src="${el.preview}"
      alt="${el.description}"
      loading="lazy"
      width=372
      height=240  
    />
  </a>
</li>`
}

const createdGallery = galleryItems.map(createGalleryElement).join('');
galleryBox.insertAdjacentHTML('beforeend', createdGallery);

var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250});

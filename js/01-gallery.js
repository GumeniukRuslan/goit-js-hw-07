import { galleryItems } from './gallery-items.js';

const galleryBox = document.querySelector('.gallery');

function createGalleryElement(el) {
  return `<li class="gallery__item">
  <a class="gallery__link" href="${el.original}">
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


galleryBox.addEventListener('click', ev => {
  ev.preventDefault();
  const galleryItem = ev.target.closest('.gallery__link');
  if (!galleryItem) {
    return;
  }
  const modal = basicLightbox.create(`<img src="${ev.target.dataset.source}">`)
  modal.show();
});



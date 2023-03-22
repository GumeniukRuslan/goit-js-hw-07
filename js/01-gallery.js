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

let modal;
galleryBox.addEventListener('click', ev => {
  ev.preventDefault();
  if (!ev.target.closest('.gallery__link')) {
    return;
  }
  modal = basicLightbox.create(`<img src="${ev.target.dataset.source}">`)
  modal.show();
  const visible = modal.visible()
  if (visible) {
    window.addEventListener('keydown', onKeyDown)
  }
});


function onKeyDown(ev) {
  if (ev.code === 'Escape') {
    modal.close();
    window.removeEventListener('keydown', onKeyDown);
  }
}


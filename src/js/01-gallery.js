import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';
// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line
const gallery = document.querySelector('.gallery');

const markup = galleryItems
  .map(element => {
    return `<a class="gallery__item" href=${element.original}>
  <img class="gallery__image" src=${element.preview} alt=${element.description} />
</a>`;
  })
  .join('');

gallery.insertAdjacentHTML('afterbegin', markup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

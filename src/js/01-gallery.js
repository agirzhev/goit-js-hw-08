// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css'

//console.log(galleryItems);
const gallery = document.querySelector(".gallery");

const element = galleryItems.map((image) => '<a class="gallery__item" href="'+image.original+'" > <img class="gallery__image" src="'+image.preview+'" alt="'+image.description+'"/></a>').join('');
gallery.insertAdjacentHTML('beforeEnd', element);
  
  
gallery.addEventListener("click", onclick);
  
  let ligthBox = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: 'alt'});
  ligthBox.on('show.simplelightbox', function () {
	// do something…
});
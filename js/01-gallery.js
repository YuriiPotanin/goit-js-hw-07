import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector(".gallery");

container.insertAdjacentHTML("afterbegin", createMarkup(galleryItems));
container.addEventListener("click", handlerClick);

function createMarkup(arr) {
  return arr
    .map(
        ({ preview, original, description }) => `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
        </li> `
    )
    .join(" ");
}

function handlerClick(evt) {
    if (evt.target === evt.currentTarget) {
        return;
    }
   evt.preventDefault();
    
    const curImage = evt.target;
    const instance = basicLightbox.create(`
    <div class="modal">
        <img src="${curImage.dataset.source}" class="modal_img" width="1100" height="720">
    </div>
`);
    instance.show();
    document.addEventListener('keydown', (event) => {
        if (event.key !== 'Escape') {
            return;
        }
    instance.close();
    });
}



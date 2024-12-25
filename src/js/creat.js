const galleryItemnsBlock = document.querySelector('.gallery__itemns');

export default function creatItemns (el) {
  
  el.forEach(function(itemn) {
    const div = document.createElement('div');
    div.classList.add('gallery__itemn');

    const img = document.createElement('img');
    img.classList.add('gallery__img');
    img.alt = 'animals';
    img.src = itemn.image;

    const divDesk = document.createElement('div');
    divDesk.classList.add('gallery__desk');

    const divInf = document.createElement('div');
    divInf.classList.add('gallery__inf');

    const title = document.createElement('div');
    title.classList.add('gallery__title');
    title.innerText = itemn.name;

    const text = document.createElement('p');
    text.classList.add('gallery__text');
    text.innerText = itemn.title;

    const divBg = document.createElement('div');
    divBg.classList.add('gallery__pic');
    divBg.src = itemn.icon;

    galleryItemnsBlock.appendChild(div);
    div.appendChild(img);
    div.appendChild(divDesk);
    divDesk.appendChild(divInf);
    divInf.appendChild(title);
    divInf.appendChild(text);
    divDesk.appendChild(divBg);
  });
};
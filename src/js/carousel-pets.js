import data from './data.js';
import shuffle from './random.js';
import creatItemns from './creat.js';

const galleryItemns = document.getElementById('carousel__itemns');
const left = document.getElementById('btn-left');
const right = document.getElementById('btn-right');

const galleryItemnsFirst = document.getElementById('gallery__itemns_first');
const galleryItemnSecond = document.getElementById('gallery__itemns_second');
const galleryItemnsBlock = document.querySelector('.gallery__itemns');

left.addEventListener('click', moveLeft);
right.addEventListener('click', moveRight);
galleryItemns.addEventListener('animationend', slaider);

function moveLeft () {
  galleryItemns.classList.add('transition-left');
};

function moveRight () {
  galleryItemns.classList.add('transition-right');
};

function slaider (animationEvent) {
  if (animationEvent.animationName === 'move-left') {
    galleryItemns.classList.remove('transition-left');
    galleryItemnsBlock.innerHTML = '';
    newArr(data);
  };
  if (animationEvent.animationName === 'move-right') {
    galleryItemns.classList.remove('transition-right');
    galleryItemnsBlock.innerHTML = '';
    newArr(data);
  };
};

function newArr(data) {
  shuffle (data);
  let newItemns = data.slice(9);
  creatItemns (newItemns);
  
};


























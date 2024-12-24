import data from './data.js';
import shuffle from './random.js';
import creatItemns from './creat.js';

const galleryItemns = document.getElementById('carousel__itemns');
const itemns = document.querySelectorAll('.gallery__itemns');
const left = document.getElementById('btn-left');
const right = document.getElementById('btn-right');

let isEnabled = true;
let currentItemn = 0;

const galleryItemnsFirst = document.getElementById('gallery__itemns_first');
const galleryItemnSecond = document.getElementById('gallery__itemns_second');
const galleryItemnsBlock = document.querySelector('.gallery__itemns');

left.addEventListener('click', moveLeft);
right.addEventListener('click', moveRight);
galleryItemns.addEventListener('animationend', slaider);


function moveLeft () {
  galleryItemns.classList.add('transition-left');
  galleryItemnsFirst.innerHTML = '';
  newArr(data);
  galleryItemnSecond.innerHTML = galleryItemnsFirst.innerHTML;
};

function moveRight () {
  galleryItemns.classList.add('transition-right');
  galleryItemnSecond.innerHTML = galleryItemnsFirst.innerHTML;
  galleryItemnsFirst.innerHTML = '';
  newArr(data);
};

function slaider (animationEvent) {
  if (animationEvent.animationName === 'move-left') {
    galleryItemns.classList.remove('transition-left');
  };
  if (animationEvent.animationName === 'move-right') {
    galleryItemns.classList.remove('transition-right');
  };
};

function newArr(data) {
  shuffle (data);
  let newItemns = data.slice(9);
  creatItemns (newItemns);
};
























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

const swipedetect = (el) => {
  let surface = el;
  let startX = 0;
  let startY = 0;
  let distX = 0;
  let distY = 0;
  let startTime = 0;
  let elapsedTime = 0;

  let threshold = 150;
  let restraint = 100;
  let allowedTime = 300;

  surface.addEventListener('mousedown', function(e){
    startX = e.pageX;
    startY = e.pageY;
    startTime = new Date().getTime();
    e.preventDefault();
    
  }, false);
  
  surface.addEventListener('mouseup', function(e){
    distX = e.pageX - startX;
    distY = e.pageY - startY;
    elapsedTime = new Date().getTime() - startTime;
    if(elapsedTime <= allowedTime) {
      if(Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
        if((distX > 0)) {
          
          moveRight ();
        }
        else {
          moveLeft ();
        }
      }
    }
    e.preventDefault();
  }, false);

  surface.addEventListener ('touchstart', function (e){
    if(e.target.classList.contains('gallery__btn')) {
      if(e.target.classList.contains('gallery__btn_left')) {
        moveLeft ();
      };
      if(e.target.classList.contains('gallery__btn_right')) {
        moveRight ();
      };
    };
    
    let touchItemn = e.changedTouches[0];
    startX = touchItemn.pageX;
    startY = touchItemn.pageY;
    startTime = new Date().getTime();
    e.preventDefault();
  }, false);


  surface.addEventListener('touchmove', function(e){
    e.preventDefault();
  }, false);
  
  
  surface.addEventListener('touchend', function(e){
    let touchItemn = e.changedTouches[0];
    distX = touchItemn.pageX - startX;
    distY = touchItemn.pageY - startY;
    elapsedTime = new Date().getTime() - startTime;
    if(elapsedTime <= allowedTime) {
    distX = touchItemn.pageX - startX;
      if(Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
        if((distX > 0)) {
          moveRight ();
        }
        else {
          moveLeft ();
        }
      }
    }
    e.preventDefault();
  }, false)

};

const el = document.getElementById('carousel__itemns');
swipedetect(el);























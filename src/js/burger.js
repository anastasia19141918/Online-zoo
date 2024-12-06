const menuBurger = document.getElementById('menu-burger');
const headerItemns = document.getElementById('header__itemns');
const headerItemn = document.querySelectorAll('.header__itemn');

menuBurger.addEventListener('click', function(el){
  menuBurger.classList.toggle('menu-burger_active');
  headerItemns.classList.toggle('header__itemns__active');
});

headerItemn.forEach(function(el){
  el.addEventListener('click', function(){
    menuBurger.classList.remove('menu-burger_active');
    headerItemns.classList.remove('header__itemns__active');
  })
});

document.addEventListener('click', function(el){
  const click = el.composedPath().includes(menuBurger);
  const targetClick = el.target;
  
  if(!click) {
    menuBurger.classList.remove('menu-burger_active');
    headerItemns.classList.remove('header__itemns__active');
  };
  if(targetClick === headerItemns) {
    menuBurger.classList.add('menu-burger_active');
  headerItemns.classList.add('header__itemns__active');
  }
});





const formInput =  document.getElementById('form_input');
const inputNumber = document.querySelectorAll('.input__radio');

inputNumber.forEach(function(el){
  el.addEventListener('click', function(){
    formInput.value = el.value;
  })
  
})
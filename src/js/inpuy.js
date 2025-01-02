const formInput =  document.getElementById('form_input');
const inputNumber = document.querySelectorAll('.input__radio');
const inputRadioAmound = document.getElementById('input__radio__100');

inputNumber.forEach(function(el){
  el.addEventListener('click', function(){
    formInput.value = el.value;
  })
});

function showAmound () {
  formInput.value = inputRadioAmound.value;
};

window.addEventListener('load', showAmound);
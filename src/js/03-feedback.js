import lodash from 'lodash.throttle'
const input = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');
let elements = {
      email: email.value,
      message: message.value}
  ;

if (JSON.parse(localStorage.getItem('feedback-form-state')).email != null) {
  
  email.value = JSON.parse(localStorage.getItem('feedback-form-state')).email;
  
}
if (JSON.parse(localStorage.getItem('feedback-form-state')).message != null) {
  
  message.value = JSON.parse(localStorage.getItem('feedback-form-state')).message;
  
}

function saveStorage()  {
  
  elements.email = email.value
  elements.message = message.value  
  
  localStorage.setItem('feedback-form-state', JSON.stringify(elements))
  
}

input.addEventListener('input', function (event) { 
    
  saveStorage()
}  
);

input.addEventListener("submit", function (event) {

  event.preventDefault()

  console.log(elements)
  
  event.target.reset();
} 
);

setInterval(lodash(saveStorage, 500));
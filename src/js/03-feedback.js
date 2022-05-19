import lodash from 'lodash.throttle'
const input = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');

if(localStorage.removeItem('email') != undefined) {email.value = localStorage.removeItem('email');
}
if(localStorage.removeItem('message') != undefined) {message.value = localStorage.removeItem('message');
}

input.addEventListener('input', function (event) {
  localStorage.setItem('email', email.value)
  localStorage.setItem('message', message.value)
}  
);

input.addEventListener("submit", function (event) {
  
  event.preventDefault()

  const 
    elements = {
      email:email.value,
      message: message.value}
  ;

  console.log(elements)
  
  event.target.reset();
} 
);

function saveStorage()  {
  
  localStorage.setItem('email', email.value)
  localStorage.setItem('message', message.value)
  
}

setInterval(lodash(saveStorage, 5000));
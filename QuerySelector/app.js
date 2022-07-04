let x

x = document.querySelector('h1').textContent = "I have changed this";
console.log(x);
let y
y = document.querySelector('#hero').textContent = "This is a hero";
console.log(y);

let z
z = document.querySelector('.list-item').textContent = "text"
console.log(z)
let p 
p = document.querySelector('#dynamic-text').textContent = "Here is dynamic text."
console.log(p)
let v 
v = document.querySelectorAll('.list-item').forEach((list) =>{
  console.log(list.textContent );
})
v = document.querySelectorAll('.list-item')
console.log(v)

let favfood = ['pizza', 'bacon', 'cereal', 'eggs', 'beans']

let f = document.querySelector('#dynamicContent')

favfood.forEach((item) => {
  f.innerHTML += `<li> ${item} </li>`
})

function darkMode() {
  let b = document.body;
  b.classList.toggle("darkMode");
}


const openButton = document.querySelector('#open');
const closeButton = document.querySelector('#close');
const collapsibleContentOpen = document.querySelector(
  '#collapsible-content-open'
);

openButton.addEventListener('click', () => {
  collapsibleContentOpen.classList.remove('hide');
})
closeButton.addEventListener('click', () => {
  collapsibleContentOpen.classList.add('hide');
})

const toggleButton = document.querySelector('#toggle-reveal');
const collapsibleContentToggle = document.querySelector(
  '#collapsible-content-toggle'
);

toggleButton.addEventListener('click', () => {
  collapsibleContentToggle.classList.toggle('hide');
})

const form = document.querySelector('#form');
    const password = document.querySelector('#password');


    form.addEventListener('submit', (event) => {
      event.preventDefault();
      checkPassword(password.value)
    })

    function checkPassword(password) {
      if (password.length < 8) {
        console.log('Your password is not allowed')
      } else {
        console.log('Your password is allowed')
      }

    }

const accordianHeaders = document.querySelectorAll('.accordian-item-header');
console.log(accordianHeaders)

accordianHeaders.forEach((head) => {
  head.addEventListener('click', () => {
head.nextElementSibling.classList.toggle('hide-item')
  }) 
})






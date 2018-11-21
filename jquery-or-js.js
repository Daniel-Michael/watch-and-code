// SELECTING DOM ELEMENTS
// --> The jQuery way:
$('.button')

// --> The javascript way:
document.querySelector('.button')

// to select more elements
document.querySelectorAll('.button')

// =====================================

// WAIT FOR THE DOM TO BE LOADED
// --> The jQuery way:
$(document).ready() => {
  // ..
}

// The DOM way
document.addEventListener("DOMContentLoaded", () => {
  // ..
});

// =====================================

// ADD OR REMOVE CLASSES FROM A DOM ELEMENT
// --> The jQuery way:

el.addClas('big')
el.removeClass('big')
el.toggleClass('big')

// The DOM way

el.classList.add('big')
el.classList.remove('big')
el.classList.toggle('big')

// =====================================

// REMOVING AN ELEMENT FROM THE DOM
// --> The jQuery way:

el.remove()

// The DOM way 

el.remove() // no change

// =====================================

// CHANGE THE CONTENT OF AN ELEMENT IN THE DOM
// --> The jQuery way:

el.text('Hello')
el.html('Hello')

// The DOM  way

el.innerHTML= 'Hello'
el.textContent = 'Hello'
el.innerHTML
el.textContent

// =====================================

// SELECTING THE PARENT ELEMENT IN THE DOM
// --> The jQuery way:

el.parent()

// The DOM  way

el.parentNode

// =====================================

// LISTENING FOR EVENTS ON DOM ELEMENTS
// --> The jQuery way:

el.on('click', (e) => { /* ... */})

// The DOM  way

el.addEventListener('click', (e) => { /* */})
// =====================================

// AJAS REQUESTS
// --> The jQuery way:

$.ajax({
  url: '/api.json',
  type: 'GET'
  success: (data) => {
    console.log(data)
  }
})

// The modern JS way

fetch('/api.json')
  .then(response => response.text())
  .then(body => console.log(body))

// =====================================

// --> jQuery animations can be don in the browser ussing CSS Transitions and animations

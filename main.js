// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// turn our HTML collection of hearts into an array, accessing each heart-class of 'like-glyph'
let heartsNodeArray = [...document.getElementsByClassName('like-glyph')];

// define the modal & add the hidden class immediately to #modal
const modal = document.getElementById("modal")
modal.classList.add("hidden")

// define the modal paragraph contents
let modalParagraph = document.getElementById('modal-message');

// express the catch for error message
let callServerAndCatch = (event) => {
  mimicServerCall()
  .then(() => handleResponse(event))
  .catch ((error) => handleError(error))
}

// express the modal and display the error message, once total per event(s)
let handleError = (errorMessage) => {
  modal.classList.remove('hidden')
  modalParagraph.innerText = errorMessage
  setTimeout(() => { 
    modal.classList.add("hidden")
    modalParagraph.innerText = "" 
  }, 3000);
}

// hanlde the expression of the heart being liked/unliked
let handleResponse = (event) => {
  if (event.target.textContent === EMPTY_HEART){
    event.target.classList.add("activated-heart")
    event.target.textContent = FULL_HEART
  }
  else {
    event.target.classList.remove("activated-heart")
    event.target.textContent = EMPTY_HEART
  }
}

// add an event listener over each element (each heartNode) of the array 
heartsNodeArray.map(heartNode => {
  heartNode.addEventListener('click', callServerAndCatch)
})









//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}



/*


  // majlind method
  document.addEventListener("DOMContentLoaded", () => {
    
  
    // select the class of like-glyph ("the heart")
    const heart = document.querySelectorAll("span.like-glyph")
    // console.log(heart)
  
    //   // need an event-handler, a click-event that reviews the like-glyph class
  //   addEventListener('click', )
  
  // })
  
  //   // write a function heartLiker 
  //   function heartLiker(){
  //     console.log(heart.target)
  //     mimicServerCall()
  //     .then(() =>)
  //   }
  
  })
  
  */
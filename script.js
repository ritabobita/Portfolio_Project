let button = document.getElementById('click-here');
let answer = document.getElementById('answer');

let responseArray = ['Yes, absolutely!', 'Send an inquiry', 'Nah (jk please do!)'];

/*function magic8() {
    let response = responseArray[Math.floor(Math.random() * responseArray.length)];
    return document.answer.innerHTML = response;
}*/

function showItem(){
    answer.style.display = 'block';
  }

button.addEventListener('click', showItem);

/*left off here, want to/need to figure out how to make magic8 function work*/
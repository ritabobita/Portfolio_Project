let button = document.getElementById('click-here');
let answer = document.getElementById('answer');

let responseArray = ['Yes, absolutely!', 'Send an inquiry', 'Nah (jk please do!)'];

function magic8() {
    let response = responseArray[Math.floor(Math.random() * responseArray.length)];
    return answer.innerHTML = response;
}

button.addEventListener('click', magic8);

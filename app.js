//Get Elements
const btnGet = document.getElementById('btn-get');
const output = document.getElementById('output');

//Eventlisteners
btnGet.addEventListener('click', getAdvice);

//Functions
function getAdvice(){
    fetch('https://api.adviceslip.com/advice')
    .then((res) => res.json())
    .then((res) => {
        let advice = res.slip.advice;
        output.innerHTML = `<p class="content-text">${advice}</p>`;
    });
}
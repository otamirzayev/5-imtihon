
const api = 'https://api.adviceslip.com/advice';

const generateBtn = document.querySelector('#generate');

function updateUI(advice) {
    document.getElementById("advice").textContent = `ADVICE #${advice.id}`;
    document.getElementById("text").textContent = `"${advice.advice}"`;
}

function getData(api){
    return fetch(api)
        .then(response => response.json())
        .then(data => data.slip);
}

generateBtn.addEventListener("click" , () => {
    getData(api)
        .then(advice => updateUI(advice))
        .catch(error => console.error('error:', error));
});

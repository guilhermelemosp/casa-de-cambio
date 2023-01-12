const campoDeEscrita = document.querySelector('#input-atual');
const button = document.querySelector('#button');
const list = document.querySelector('#list');




const apiUrl = (moeda) => {
    const url = `https://api.exchangerate.host/latest?base=${moeda}`;
    return fetch(url).then((response) => response.json())
        .then((data) => data.rates);

};
var captar = '';
function chamar() {
captar = campoDeEscrita.value;
list.innerHTML = apiUrl();
}

//ao clicar no botao pesquisar, a list tem que mudar para o que está escrito no apiurl

//lançar um innerhtml no list correlacionado ao apiUrl

// button.addEventListener('click', (event) => {

//     event.preventDefault();

//     fetch(`${url} ${campoDeEscrita}`)
//         .then((result) => result.json())
//         .then((data) => {
//             list.innerHTML = data.rates;
//         });
// });
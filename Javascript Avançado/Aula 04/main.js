//Parte 01: HTML E JS
//1. Alterar o texto de um H1 para “ola mundo”
let titulo = document.querySelector('.titulo');
titulo.innerText = 'Olá mundo!';

//2. Trocar a cor de fundo de uma lista 2 itens
let lista = document.querySelector('.itens');
lista.style.backgroundColor = 'blue';

//3. Alterar o value de um input para “Digite algo aqui”
let campoTexto = document.querySelector('.e-mail');
campoTexto.value = 'Digite algo aqui';

//4. Alterar a altura, largura e a cor de fundo de uma div para transformar ela em um quadrado roxo
let quadrado = document.querySelector('.color');
quadrado.style.height = '100px'
quadrado.style.width = '100px'
quadrado.style.backgroundColor = "purple"

//Desafio 01: Pesquisar sobre o as funções “create element” e “append child” do document, depois, adicione uma <li> dentro de uma <ul> usando esses comandos

let novaLista = document.createElement('ul');
let novoItem = document.createElement('li');
novoItem.innerText = 'Item da lista';
novaLista.appendChild(novoItem);
document.body.appendChild(novaLista);

//Parte 02: HTML E JS
//1. Criar um botão e adicionar o evento de click para Exibir um alert.
let botao = document.querySelector('.clicar');
botao.addEventListener('click', () => { alert ('Você clicou no botão!')});

//2. Criar um elemento <p> com o nome de um animal, adicionar o evento“mouseover” para mudar o texto para um emoji do animal

let newElement = document.createElement('p');
newElement.innerText = 'Elefante';
document.body.appendChild(newElement);
newElement.addEventListener('mouseover', () => {
    if (newElement.innerHTML == 'Elefante') {
        newElement.innerHTML = '🐘'
    } else { newElement.innerHTML = 'Elefante'}
})

//3. Criar uma div com formato de um quadrado e adicionar um evento de“dblclick” (double click) para transformar ela em um circulo border-radius = 50%)

let divQuadrado = document.createElement('div');
divQuadrado.style.height = '100px';
divQuadrado.style.width = '100px';
divQuadrado.style.backgroundColor = 'pink';
document.body.appendChild(divQuadrado);
divQuadrado.addEventListener('dblclick', () => {
    if (divQuadrado) {
        divQuadrado.style.borderRadius = '50%';
    }
})

//4. Criar um botão que ao entrar com o mouse dentro dele (mouseenter) ele se move para esquerda (se quiser mudar para direita fique a vontade)

let newButton = document.createElement('button');
newButton.innerText = 'Clique';
newButton.style.position = 'relative';
document.body.appendChild(newButton);

newButton.addEventListener('mouseenter', () => {
    if(newButton.style.left === '0px') {
    newButton.style.left = '50px';
    } else {newButton.style.left = '0px'}
}   
)

//Desafio 02: Criar 1 input com a classe “nome” e um botão, ao clicar no botão mostrar em um alerta uma mensagem de bem vindo com o valor do input

let input = document.createElement('input');
input.classList.add('nome');
input.type = 'text';
input.placeholder = 'Digite seu nome';
document.body.appendChild(input);

let btnInput = document.createElement('button');
btnInput.innerText = 'Veja o valor do input';
document.body.appendChild(btnInput);

btnInput.addEventListener('click', () => {
    alert(`Bem Vindo ${input.value}`)
})

/*Desafio 03: Pesquisar sobre o class list e o class toggle:
-Usando CSS, HTML e JS faça:
-Crie uma div com formato retangular
-Usando o toggle da class list faça o que com um click o usuario consiga
mudar o formato do retangulo para um quadrado azul com as bordas levemente
arredondadas*/

let myDiv = document.getElementById('minhaDiv');
myDiv.addEventListener('click', () => {
    myDiv.classList.toggle('quadrado');
})
    
// Parte 03 - Listas e vetores somente JS

//5. Criar uma lista de nomes e exibir no console.

let nomes = ['Beatriz', 'Maria', 'João', 'Pedro'];
console.log(nomes);

//6. Adicione um nome ao final da lista usando .push().

nomes.push('Lucas');

//7. Remover o último nome da lista usando .pop().
nomes.pop('Lucas');

//8. Remover o primeiro nome da lista usando .shift().
nomes.shift('Beatriz');

//9. Criar uma lista de animais, usar o foreach para mostrar todos eles no console

let animais = ['urso', 'cachorro', 'gato', 'camelo'];

animais.forEach(animal => {console.log(animal)});

//10.Criar uma lista de nome de frutas, usar o foreach para mostrar todas elas no console

let frutas = ['laranja', 'pera', 'uva','limão','melancia'];

frutas.forEach(fruta => {console.log(fruta)});

//Desafio 04: Criar uma lista de nomes de musicas, usando querySelector, <ul>, <li> e forEach mostrar todas essas músicas no site.

let musicas = ['Anjos', 'Malandragem', 'Pescador', 'Aliança'];

let ListaMusicas = document.querySelector('.ListaMusicas');

musicas.forEach(musica => { 
    let itemMusica = document.createElement('li');
    itemMusica.textContent = musica;
    ListaMusicas.appendChild(itemMusica);
})

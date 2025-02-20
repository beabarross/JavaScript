let btn = document.querySelector("button");

let mostrarOi = () => console.log('oi')

btn.addEventListener("click",mostrarOi);

let h1 = document.querySelector('h1')

h1.addEventListener('mouseenter', e =>{
    console.log(e.target)
})

//e.target → Retorna o elemento que disparou o evento (o próprio <h1> neste caso).

document.addEventListener("keydown", event => {
    if(event.key == "a") alert('Você apertou a')
})

//keydown: quando a tecla é pressionada

// Adiciona a classe 'fundo-branco' ao elemento <html>, mudando seu estilo
document.querySelector('html').classList.add('fundo-branco')

// Adiciona um evento que escuta quando uma tecla é pressionada
document.addEventListener('keypress', (e) => {
    
    // Verifica se a tecla pressionada foi 'f'
    if (e.key == 'f') {
        
        // Se a tecla 'f' foi pressionada, adiciona a classe 'fundo-branco' ao <html>
        document.querySelector('html').classList.add('fundo-branco')
    }
})





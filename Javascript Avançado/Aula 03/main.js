let frutas = ["lichia","limão","banana","maracujá","manga","melancia","melão","bergamota","laranja","morango","kiwi","tomate","lixia","uva","pêra","maçã"]

function atualizarListaFrutas() {
    let ulFrutas = document.querySelector(".frutas")
    ulFrutas.innerHTML = ""

    frutas.forEach(fruta =>{
        // let liFruta = document.createElement("li")
        // liFruta.innerHTML = fruta
        // ulFrutas.appendChild(liFruta)

        ulFrutas.innerHTML += `<li>${fruta}</li>`
    }) 
}
atualizarListaFrutas()

//1 - Adicionar evento "click" no botão ✔
//2 - Pegar o valor do input e salvar em uma variavel ✔
//3 - Adicionar o valor da variavel dentro da lista ✔
//4 - Rodar a função atualizarListaFrutas()

document.querySelector(".btn-fruta")
.addEventListener("click", ()=>{
    let input = document.querySelector(".nome-fruta")
    frutas.push(input.value) 
    atualizarListaFrutas()
})




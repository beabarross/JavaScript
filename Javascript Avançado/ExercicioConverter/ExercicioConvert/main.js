// Seleciona o botão com a classe "converter" no documento HTML
let button = document.querySelector('.converter')

// Faz uma requisição para a API que retorna a cotação do dólar em relação ao real
fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL')

// Converte a resposta da API para JSON
.then(resposta => resposta.json())

// Acessa a propriedade 'bid' (valor de compra) do objeto retornado e coloca no campo de input com a classe "dolar"
.then(payload => document.querySelector(".dolar").value = payload.USDBRL.bid)

// Adiciona um evento de clique ao botão
button.addEventListener("click", () => {

    // Pega o valor do campo "dolar" e converte para número
    let dolar = Number(document.querySelector(".dolar").value)

    // Pega o valor digitado no campo "real" e converte para número
    let real = Number(document.querySelector(".real").value)

    // Multiplica o valor do dólar pelo valor digitado em reais e exibe o resultado no campo "valorFinal"
    document.querySelector(".valorFinal").value = dolar * real
})


// button.addEventListener("click", ()=>{
//     fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL')
//     .then(resp => resp.json())
//     .then(payload => {
//         let dolar = payload.USDBRL.bid

//         let real = Number(document.querySelector(".real").value)
        
//         document.querySelector(".valorFinal").value = dolar * real
//     })
// })
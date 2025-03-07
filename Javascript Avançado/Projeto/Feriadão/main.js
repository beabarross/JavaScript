let pokemons = [
    {
        nome: "Bulbassauro",
        imagem: "imagens/001",
        tipo: "grama",
    },
    {
        nome: "Swampert",
        imagem: "imagens/260",
        tipo: "agua",
    },
    {
        nome: "Minccino",
        imagem: "imagens/572",
        tipo: "normal",
    },
    {
        nome: "Diggersby",
        imagem: "imagens/660",
        tipo: "terrestre",
    },
    {
        nome: "Phantump",
        imagem: "imagens/708",
        tipo: "fantasma",
    },
    {
        nome: "Edelgoss",
        imagem: "imagens/830",
        tipo: "grama",
    },
    {
        nome: "Moushold",
        imagem: "imagens/925",
        tipo: "normal",
    },
    {
        nome: "Iron Treads",
        imagem: "imagens/990",
        tipo: "metal",
        
    }
];

pokemons.forEach(pokemon =>{
    let lista = document.querySelector(".lista-pokemon")
    lista.innerHTML += `<div class="pokemon ${pokemon.nome}">
                <div class="nome ">
                    <p>${pokemon.nome} </p>
                </div>
                <div class="tipo ${pokemon.tipo}">
                    <p>${pokemon.tipo}</p>
                </div>
                <img src="${pokemon.imagem}.png" alt="">
            
                </div>
                `
})



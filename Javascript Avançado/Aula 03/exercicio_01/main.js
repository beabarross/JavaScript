let listaFilmes = ["carros 2","carros", "toy story","up","monstros sa"]

function atualizarListaFilmes(){
    //selecionar a ul ".lista-filmes" e guarda o 
    //elemento html dentro da variavel ul  
    let ul = document.querySelector(".lista-filmes")

    //limpa a lista para poder reescrever os filmes com o novo filme
    ul.innerHTML = "<h1> oi </h1>"

    //o comando foreach percorre todos os itens da lista
    //nesse caso todos os "filme"  de "listaFilmes" 
    //usamos ele aqui para adicionar uma nova tag <li> dentro do html <ul>
    //para cada "film" na lista "listaFilmes"
    listaFilmes.forEach(filme => {
        ul.innerHTML += `<li>${filme}</li>`

    })
}
//Executamos a função 1 vez na hora que o scrip roda no site
atualizarListaFilmes()

//Selecionamos do html o botão btn-adicionar
//e ja adicionamos um evento de click nele
//o evento executa a nameless function
//a função faz:
//1ª)usa o queryselector para salvar na variavel input a tag input ".nome-filme"
//obs: cria uma "instância" da tag input na variavel.
//2ª)usamos o listaFilmes.push() para adicionar um novo filme usando valor
//do input (input.value)
//3ª)Rodamos novamente a função atualizarListaFilmes() para limpar o conteudo
//interno da ul e escrever novamente todos os filmes ali dentro.
//obs: temos que limpar a a tag Ul para nao ter itens duplicados dentro dela.
document.querySelector(".btn-adicionar")
.addEventListener("click", ()=> {
    let input = document.querySelector(".nome-filme")
    listaFilmes.push(input.value)
    atualizarListaFilmes()
})

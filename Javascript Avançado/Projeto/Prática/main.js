let winxs = [
    {
        nome: 'Bloom',
        imagem: 'imagens/bloom.png',
        poder: 'fogo',
    },
    {
        nome: 'Stella',
        imagem: 'imagens/stella.png',
        poder: 'luz',
    },
    {
        nome: 'Flora',
        imagem: 'imagens/flora.png',
        poder: 'natureza',
    },
    {
        nome: 'Musa',
        imagem: 'imagens/musa.png',
        poder: 'musica',
    },
    {
        nome: 'Tecna',
        imagem: 'imagens/tecna.png',
        poder: 'tecnologia',
    },
    {
        nome: 'Aisha',
        imagem: 'imagens/aisha.png',
        poder: 'ondas',
    },
];

winxs.forEach(winx => {
    let lista = document.querySelector('.lista-winx')
    lista.innerHTML += `<div class="winx ${winx.nome}">
                <div class="nome">
                    <p>${winx.nome}</p>
                </div>
                <div class="poder ${winx.poder}">
                    <p>${winx.poder}</p>
                </div>
                <img src="${winx.imagem}" alt="">
            </div>`
})

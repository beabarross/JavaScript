//Exibir uma mensagem ao carregar a minha página
alert('Bem vindo a minha página!');

function exibirMensagem() {
    alert('Você clicou no botão');
    console.log('A página executou o método: exibirMensagem');
}

//Exercício 3 - Calculadora
function realizarCalculos() {
    let numero1 = parseInt(prompt('Informe o primeiro valor'));
    let numero2 = parseInt(prompt('Informe o segundo valor'));
    somar(numero1,numero2);
    subtrair(numero1,numero2);
    dividir(numero1,numero2);
    multiplicar(numero1,numero2);
}

function somar(valor1, valor2) {
    let resultado = valor1 + valor2;
    console.log('O resultado da soma entre '+valor1+' e '+valor2+' é : '+resultado);
}

function subtrair(valor1, valor2){
    let resultado = valor1 - valor2;
    console.log('O resultado da subtração entre '+valor1+' e '+valor2+' é : '+resultado);
}

function dividir(valor1, valor2){
    let resultado = valor1 / valor2;
    console.log('O resultado da divisão entre '+valor1+' e '+valor2+' é : '+resultado);
}

function multiplicar(valor1, valor2){
    let resultado = valor1 * valor2;
    console.log('O resultado da multiplicação entre '+valor1+' e '+valor2+' é : '+resultado);
}

//Calculadora "funcional"
var valor1 = '';
var valor2 = '';
var operacao = '';
const qtdCasaDecimal = 2;

function guardarNumero(valor) {
    if (!operacao) {
        valor1 += valor;
        console.log(valor1);
    } else {
        valor2 += valor;
        console.log(valor2);
    }
}

function guardarOperacao(operacaoE) {
    operacao = operacaoE;
}

function limpar() {
    valor1 = '';
    valor2 = '';
    operacao = '';
}

function calcular() {
    valor1 = parseFloat(valor1);
    valor2 = parseFloat(valor2);
    let resultado;
    if (operacao == '+') {
        resultado = valor1 + valor2;
    } else if (operacao == '-') {
        resultado = valor1 - valor2;
    } else if (operacao == '*') {
        resultado = valor1 * valor2;
    } else if (operacao == '/') {
        resultado = valor1 / valor2;
    }
    alert('Resultado: ' + resultado);
    limpar();
}

<<<<<<< HEAD
function calcularComSwitch() {
    valor1 = parseFloat(valor1);
    valor2 = parseFloat(valor2);
    let resultado;
    switch(operacao) {
        case '+':
            resultado = valor1 + valor2
            break;
        case '-':
            resultado = valor1 - valor2
            break;
        case '*':
            resultado = valor1 * valor2
            break;
        case '/':
            resultado = valor1 / valor2
            break;
=======

//Exercício 1

function identificarSono() {
    const qtdHoras = prompt('Quantas horas você tem dormido por noite?');
    if (qtdHoras < 8) {
        alert('Você está dormindo pouco. Durma mais!');
    } else {
        alert('Você está dormindo o suficiente, continue assim!');
>>>>>>> 4be94c95b577e27159428e503c3262ce7813595c
    }
    alert('Resultado: ' +resultado);
    limpar();
}

//Exercício 2

<<<<<<< HEAD
//Exercício 1

function identificarSono() {
    const qtdHoras = prompt('Quantas horas você tem dormido por noite?');
    if (qtdHoras < 8) {
        alert('Você está dormindo pouco. Durma mais!');
    } else {
        alert('Você está dormindo o suficiente, continue assim!');
    }
}

//Exercício 2

=======
>>>>>>> 4be94c95b577e27159428e503c3262ce7813595c
/*function retornarHora(valorDaHora) {
    const = prompt('Que horas são?')
    if (valor da hora <= 12) {
        alert( valorDaHora + a.m. ');
    } else {
        alert (' valorDaHora + p.m. ');
    }
}
*/

//Resolução correta Exercício 2

function retornarHora() {
    const qtdHora = prompt('Que horas são?');

    if (qtdHora > 12) {
        alert(qtdHora - 12 +'p.m.');
    } else {
        alert(qtdHora + 'a.m.')
    }
}

//Explicação Operadores Lógicos
function testarOperadorOu() {
    const nro = prompt('Informe um número');
    if (nro == 5 || nro == 10) {
        alert( 'O número é 5 ou 10');
    } else {
        alert('Outro número');
    }
}

function testarOperadorE() {
    const idade = prompt('Informe a sua idade');
    const idadeAmigo = prompt('Informe a idade do seu amigo');
    if (idade >= 18 && idadeAmigo >= 18) {
        alert ('Vocês estão liberados para beber');
    } else {
        alert ('Infelizmente não podem beber');
    }
}

function validarNumeroEntre (vlInicio, vlFinal, vlValidar) {
    if (vlValidar >= vlInicio && vlValidar <= vlFinal) {
        return true;
    }
    return false
}

function verificarEntradaBalada() {
    const idade = prompt('Informe a sua idade');
    const lista = prompt('Você tem nome na lista? Digite Sim ou Não');
    const ingresso = prompt('Você tem ingresso? Digite Sim ou Não');

    if (idade >= 18 && (ingresso.toUpperCase() == 'SIM' || lista.toUpperCase() == 'SIM')) {
        alert('Entrada permitida');
    } else {
        alert('Entrada negada');
    }
}

//não é necessário criar consts, pois só são utilizado os prompts para ter informação

function verificarEntradaMelhorada() {

    if (prompt('Informe a sua idade') >= 18 && (prompt('Você tem nome na lista? Digite Sim ou Não').toUpperCase() == 'SIM' || prompt('Você tem ingresso? Digite Sim ou Não').toUpperCase() == 'SIM')) {
        alert('Entrada permitida');
    } else {
        alert('Entrada negada');
    }
<<<<<<< HEAD
}

function verificarMeiaEntrada() {
    const idade = prompt('Informe sua idade');
    if (idade < 12 || idade > 60) {
        alert('Você tem direito a meia entrada');
    } else {
        alert('Você paga entrada inteira');
    }
}

function identificarNomeUsuario() {
    const nomeUsuario = prompt("Informe seu nome");
    if (!nomeUsuario) {
        alert("Entrada esta proibida. Obrigatorio informar seu nome!");
        identificarNomeUsuario();
    } else {
        alert("Entrada liberada!");
    }
}

function calcularoIMC() {
    const peso = prompt('Informe seu peso');
    let altura = prompt('Informe sua altura');

    //Verificando se está em centímetros para converter para metros
    if (altura.indexOf('.') == -1 && altura.length > 1) {
        altura = altura / 100;
    }
    const imc = peso / (altura * altura);

    if (imc <= 18.5) {
        alert('Você está abaixo do peso');
    } else if (imc > 18.5 && imc <= 25) {
        alert('Você está no peso normal');
    } else if (imc > 25 && imc <= 30) {
        alert('Você está acima do peso');
    } else {
        alert('Você está obeso');
    }
}

function converterDiaSemana() {
    const diaSemana = parseInt(prompt('Informe o dia da semana em número'));
    const DOMINGO = 1, SEGUNDA = 2, TERCA = 3, QUARTA = 4 , QUINTA = 5, SEXTA = 6, SABADO = 7;
    switch (diaSemana) {
        case DOMINGO: {
            alert('Domingo');
            break;
        }
        case SEGUNDA: {
            alert('Segunda-feira');
            break;
        }
        case TERCA: {
            alert('Terça-feira');
            break;
        }
        case QUARTA: {
            alert('Quarta-feira');
            break;
        }
        case QUINTA: {
            alert('Quinta-feira');
            break;
        }
        case SEXTA: {
            alert('Sexta-feira');
            break;
        }
        case SABADO: {
            alert('Sábado');
            break;
        }
        default: {
            alert('Dia inválido');
        }
    }
}

//Elabore um algoritmo que leia o peso e a altura de um adulto e mostre sua condição de acordo com a tabela.


function calcularIMC() {
    console.log("A função calcularIMC() foi chamada!"); // Teste de depuração
    //leia o peso
    const peso = parseFloat(prompt('Informe o seu peso'));
    //leia a altura
    let altura = parseFloat(prompt('Informe a sua altura'));
    //se a altura não tiver ponto e for maior que 2 caracteres, então é altura em cm, então converter para metros, que é altura / 100
    if (!String(altura).includes('.') && altura >= 100) {
        altura = altura / 100;
    }
    
    //calcule o imc
    const imc = peso / (altura * altura);
    //mostre a condição
    if (imc <= 18.5) {
    alert ('Você está abaixo do peso');
}   else if (imc > 18.5 && imc <= 25) {
    alert ('Você está no peso normal');
}   else if (imc > 25 && imc <= 30) {
    alert ('Você está acima do peso');
}   else {
    alert ('Você está obeso')
}
}

/* function calcularPrecoProduto(preco) {
    const preco = parseFloat(prompt('Informe o valor da sua compra.'));
    let valorTotal = calcularFormaPagamento(preco);
}

function calcularFormaPagamento(preco) {
    const formaPgto = parseInt(prompt('Informe a forma de pagamento. \n1 - PIX\n2 - Cartão de débito. \n3- Cartão de débito. \n4 - Boleto.'));
    const PIX = 1, DEBITO = 2, CREDITO = 3, BOLETO = 4;
    switch (formaPgto) {
        case PIX: {
            return preco - preco * 0.1;
        }
        case DEBITO: {
            return preco - preco * 0.05;
        }
        case CREDITO: {
            return preco + preco * 0.02;
        }
        default: {
            return preco;
        }
    }
}
    */

function calcularValorTotal(){
    const valorProduto = prompt('Informe o valor total dos produtos');
    //calcular o valor da forma de pagamento
    let total = calcularFormaPgto(valorProduto);
    //calcular o valor do desconto (se houver)
    total = calcularDesconto(valorProduto);
    //calcular o valor do frete
}

function calcularFormaPgto(vlProduto) {
    const formaPgto = parseInt(prompt('Informe a forma de pagamente /n1 - Cartão de débito/n2 - PIX/n3 - Cartão de Crédito/n4 - Boleto'));
    const CARTAODEB = 1, PIX = 2, CARTAOCRED = 3, BOLETO = 4;
    
    /*
    BOLETO = 4;
    if (formaPgto == CARTAODEB) {
        //5% OFF
    } else if (formaPgto == PIX) {
        //10% OFF
    } else if (formaPgto == CARTAOCRED) {
        //+ 2%
    } else if (formaPgto == BOLETO) {
        //não adc nada
    }
        mas usa-se o switch */

    switch (formaPgto) {
        case CARTAODEB : 
            //5% OFF
            return vlProduto - (vlProduto * 0.05);
            break;
        case PIX: 
            //10% OFF
            return vlProduto - (vlProduto * 0.1);
            break;
        case CARTAOCRED:
            //+ 2%
            return vlProduto + (vlProduto * 0.02);
            break;
        case BOLETO:
            //não adc nada
            return vlProduto;
    }
}

function calcularDesconto(vlProduto) {
    const cupom = prompt('Você possui algum cupom? Se sim, digite-o');
    let valorCupom = cupom.substring(0,2);
    if (verificarCupomValido(cupom)) {
        //aplicar o desconto
        return vlProduto - (vlProduto * (valorCupom / 100));
    }
    return vlProduto;
}

function verificarCupomValido(valorCupomupom) {
    return !isNaN(valorCupom);
}



=======
}
>>>>>>> 4be94c95b577e27159428e503c3262ce7813595c

listaPessoas = [];
var count = 0;


function Pessoa(nome, apelido, idade) {
    this.nome = nome;
    this.apelido = apelido;
    this.idade = idade;
}

function pegaInputpalavra(id) {
    const input = document.getElementById(id);
    let valor = input.value;
    
    if (verificacaoPalavra(valor) == false) {
        //alert("Por favor, introduza apenas texto, não números.");
        console.log(`Valor do input ${id} inválido: ${valor}`);
        input.value = '';
        //return;
    }
    else {
        console.log(`Valor do input ${id}: ${valor}`);
        input.value = '';
        return valor;
}
}

function pegaInputnumero(id) {
    const input = document.getElementById(id);
    let valor = input.value;
    
    if (verificacaoNumero(valor) == false) {
        //alert("Por favor, introduza apenas números inteiros.");
        input.value = '';
        return;
    }
    else {
        input.value = '';
        console.log(`Valor do input ${id}: ${valor}`);
        return valor;
    }
}
    


function Persona() {
    if (count == 5) {
        alert("Máximo de 5 pessoas atingido.");
        return;
    }
    
    else {
        const nome = pegaInputpalavra('inputNome');
        console.log('Valor nome Persona: ' + nome);
        const apelido = pegaInputpalavra('inputApelido');
        console.log('Valor apelido Persona: ' + apelido);
        const idade = pegaInputnumero('inputIdade');
        const novaPessoa = new Pessoa(nome, apelido, idade);
        listaPessoas.push(novaPessoa);
        count++;
    } 
}

//function apresentar() {
//    console.log(`Olá, meu nome é ${this.nome}, meu apelido é ${this.apelido} e tenho ${this.idade} anos.`);
//}

function mostrarPessoas(){
    for (let i = 0; i < listaPessoas.length; i++) {
       // listaPessoas[i].apresentar();
        document.getElementById('resultado').innerHTML += `Olá, meu nome é ${listaPessoas[i].nome} e meu apelido é ${listaPessoas[i].apelido} e tenho ${listaPessoas[i].idade} anos.<br>`;
    }
}

function verificacaoPalavra(palavra)// Function to verify if the input is a letter
{
    const palavradaverificar = palavra;
    if (!isNaN(palavradaverificar) && !isNaN(parseFloat(palavradaverificar))) {
        alert("Por favor, introduza apenas texto, não números.");
        return false;
    }
    else if (palavradaverificar.trim() == '') {
        alert("Por favor, preencha o campo com um texto válido.");
        return false;
    }
    else if (palavradaverificar == null || palavradaverificar == undefined) {
        alert("Por favor, preencha o campo com um texto válido.");
        return false;
    }   
}

function verificacaoNumero(numero)// Function to verify if the input is a letter
{
    const numerodaverificar = Number(numero);
    if (!Number.isInteger(numerodaverificar)) {
        alert("Por favor, introduza apenas números inteiros.");
        return false;
    }
}

// Exemplo de uso
//const pessoa1 = new Pessoa("João", "Jota", 25);
//listaPessoas.push(pessoa1);
//listaPessoas.push(new Pessoa("Maria", "Mari", 30));

// pessoa1.apresentar();
//listaPessoas[0].apresentar();
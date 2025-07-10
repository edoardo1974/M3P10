listaPessoas = [];
var count = 0;


/**
 * Represents a person.
 * - The first name of the person.
 * - The surname of the person.
 * - The age of the person.
 */
function Pessoa(nome, apelido, idade) {
    this.nome = nome;
    this.apelido = apelido;
    this.idade = idade;
}

function pegaInputpalavra(id) {// This function retrieves the value from an input field with the specified ID,
//  validates it, and returns the trimmed value.
    const input = document.getElementById(id);
    let valor = input.value;
    input.value = '';

    const valorVerificado = verificacaoPalavra(valor);

    if (valorVerificado == null) {
        return null;
    }
    else {
        return valorVerificado;
}
}

function pegaInputnumero(id) {// This function retrieves the value from an input field with the specified ID,
//  validates it, and returns the value if it's a valid integer.
    const input = document.getElementById(id);
    let valor = input.value;
    input.value = '';
    
    if (verificacaoNumero(valor) == null) {
        return null;
    }
    else {  
        return valor;
    }
}

function Persona() {// This function creates a new person object and adds it to the list of people.
    if (count == 5) {
        alert("Máximo de 5 pessoas atingido.");
        return;
    }
    else {
        const nome = pegaInputpalavra('inputNome');
        const apelido = pegaInputpalavra('inputApelido');
        const idade = pegaInputnumero('inputIdade');
        if (idade == null||nome==null||apelido==null){ 
            return; 
            } 
        else{
            const novaPessoa = new Pessoa(nome, apelido, idade);
            listaPessoas.push(novaPessoa);
            count++;
        } 
        
    }  
}



function mostrarPessoas(){// This function displays the information of all people in the list.
    for (let i = 0; i < listaPessoas.length; i++) {
        document.getElementById('resultado').innerHTML += `Olá, meu nome é ${listaPessoas[i].nome} e meu apelido é ${listaPessoas[i].apelido} e tenho ${listaPessoas[i].idade} anos.<br>`;
    }
}

function verificacaoPalavra(palavra)// This function checks if the input is a valid string.
{
    const palavradaverificar = palavra;
    if (!isNaN(palavradaverificar) && !isNaN(parseFloat(palavradaverificar))) {
        alert("Por favor, introduza apenas texto, não números.");
        return null;
    }
    else if (palavradaverificar == '') {
        alert("Por favor, introduza apenas texto.");
        return null;
    }
    else if (palavradaverificar == null || palavradaverificar == undefined) {
        alert("Por favor, introduza apenas texto.");
        return null;
    }
    return palavradaverificar.trim(); 
}

function verificacaoNumero(numero)// This function checks if the input is a valid integer.
{
    const numerodaverificar = Number(numero);
    if (!Number.isInteger(numerodaverificar)) {
        alert("Por favor, introduza apenas números inteiros.");
        return null;
    }
    else if (numerodaverificar < 0) {
        alert("Por favor, introduza apenas números inteiros positivos.");
        return null;
    }
    else if (numero.trim() == '') {
        alert("Por favor, preencha o campo com um número válido.");
        return null;
    }
    else if (numero == null || numero == undefined) {
        alert("Por favor, preencha o campo com um número válido.");
        return null;
    }
    else return numerodaverificar; 
}
    
    


listaPessoas = [];


function Pessoa(nome, apelido, idade) {
    this.nome = nome;
    this.apelido = apelido;
    this.idade = idade;

    this.apresentar = function() {
        console.log(`Olá, meu nome é ${this.nome}, meu apelido é ${this.apelido} e tenho ${this.idade} anos.`);
    };
}

function pegaInput(id) {
    const input = document.getElementById(id);
    let valor = input.value;
    console.log(`Valor do input ${id}: ${valor}`);
    input.value = '';
    return valor;
}

function criarPessoa() {
    const nome = pegaInput('inputNome');
    const apelido = pegaInput('inputApelido');
    const idade = pegaInput('inputIdade');
    
    const novaPessoa = new Pessoa(nome, apelido, idade);
    listaPessoas.push(novaPessoa);
}

// Exemplo de uso
//const pessoa1 = new Pessoa("João", "Jota", 25);
//listaPessoas.push(pessoa1);
listaPessoas.push(new Pessoa("Maria", "Mari", 30));

// pessoa1.apresentar();
listaPessoas[0].apresentar();
"use strict";
//boolean
var contaPaga = false;
//Number
var idade = 23;
var avaliacao = 4.5;
//String
var nome = 'Jhonatan Fernandes';
//Array
var idades = [23, 60, 28];
var idade2 = [23, 60, 28];
//Tuple
var jogadores;
jogadores = ['Jhonatan', 'Fulano', 'Ciclano'];
//Enum
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["Aprovado"] = "001";
    StatusAprovacao["Pendente"] = "002";
    StatusAprovacao["Reprovado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
var statusDaAprovacao = StatusAprovacao.Aprovado;
//any
var retornodaAPI = ['Jhonatan', 23, false];
var retornodaAPI2 = {
//...
};
//Void
function printarNaTela(msg) {
    console.log(msg);
}
//Num e Undefined
var u = undefined;
var n = null;
//Object
function criar(Object) {
    //.......
}
criar({
    propriedade: 1
});
//criar('Jhonatan') //Da erro
// Never 
function loopInfinito() {
    while (true) { }
}
function erro(mensagem) {
    throw new Error(mensagem);
}
function falha() {
    return erro('Algo falhou');
}
//Union Types
function exibirNota(nota) {
    console.log("A nota \u00E9 " + nota); //poderia ser console.log('A nota é ' + nota)
}
exibirNota('10');
exibirNota(10);
var funcionarios = ['Jhonatan', 'Fulano', 'Ciclano'];
function tratarFuncionarios(funcionarios) {
    //......
}
//Nulo ou opcionalis
var altura = 1.6;
altura = null;
var contato = {
    nome: 'Jhonatan',
    telefone1: '123456',
};
//Assertion
var minhaIdade = 23;
minhaIdade.toString();
minhaIdade.toString();
var input = document.getElementById("numero1");
//const input =<HTMLInputElement> document.getElementById("numero1");
console.log(input.value);

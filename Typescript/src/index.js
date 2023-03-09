//number, string, boolean, null, undefined, object
//any, unknown, never, enum, tuple
var valor = 123456789;
var nomeProduto = 'Pote';
var is_limpo = true;
var descricao;
descricao = 10;
descricao = "pedro";
//Arrays
var numbers = [1, 2, '3'];
var numbers2 = [];
var numbers3 = [];
numbers2.forEach(function (n) { return n.toString; });
numbers3.forEach(function (n) { return n.valueOf; });
//Tupla
//1, Java
var aula = [1, 'Java'];
var mySize = "P" /* Size.Small */;
console.log("Meu tamanho:" + mySize);
//Funções
function calcularImposto(renda, ano) {
    if (ano < 2023)
        return renda * 10;
    return renda * 20;
}
calcularImposto(100000, 2021);
var f1 = {
    id: 1,
    name: 'Pedro',
    aposentadoria: function (date) {
        console.log(date);
    }
};
var f2 = {
    id: 2,
    name: 'Sheila',
    aposentadoria: function (date) {
        console.log(date);
    }
};
var listaFuncionario = [f1, f2];
var funcionario;
function kgParaLbs(peso) {
    //Narrowing
    if (typeof peso === 'number')
        return peso * 2.2;
    else
        return parseInt(peso) * 2.2;
}
kgParaLbs(10);
kgParaLbs('10kg');
var textBox = {
    drag: function () {
        console.log("Arrastando o objeto");
    },
    resize: function () {
        console.log("Redimensionando o objeto");
    }
};
textBox.drag;
textBox.resize;
var quantidade = 100;

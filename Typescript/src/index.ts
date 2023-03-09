//number, string, boolean, null, undefined, object

//any, unknown, never, enum, tuple

let valor = 123_456_789

let nomeProduto = 'Pote'
let is_limpo = true

let descricao;

descricao = 10

descricao = "pedro"

//Arrays
let numbers:(number | string )[] = [1,2,'3'];
let numbers2: string[] = []
let numbers3: number[] = []
numbers2.forEach(n => n.toString)
numbers3.forEach(n => n.valueOf)

//Tupla
//1, Java
let aula:[number, string] = [1, 'Java']

//Enums

// const small =1;
// const medium = 2;
// const large = 3;

const enum Size{Small = 'P', Medium = 'M' , Large = 'G'}
let mySize: Size = Size.Small;
console.log("Meu tamanho:"+mySize)

//Funções

function calcularImposto(renda: number, ano:number):number {
    if(ano  < 2023)
        return renda *10
    return renda * 20
}

calcularImposto(100_000, 2021)

// public double calcularImposto(double renda){
//     return rendar
// }

type Funcionario ={
    readonly id: number, 
    name:string,
    aposentadoria: (date: Date) => void
}

let f1: Funcionario = {
    id:1,
    name : 'Pedro',
    aposentadoria: (date:Date) =>{
        console.log(date);
    }
}
let f2: Funcionario = {
    id:2,
    name : 'Sheila',
    aposentadoria: (date:Date) =>{
        console.log(date);
    }
}

const listaFuncionario: Funcionario[] = [f1,f2]

//Union Types

type Endereço = {
    rua:string
}

type Diretor ={
    nome:string,
    endereco:Endereço
}
type Professor = {
    nome:string
}

let funcionario: Diretor | Professor

function kgParaLbs(peso: number | string):number{
    //Narrowing
    if(typeof peso === 'number')
        return peso * 2.2
    else
        return parseInt(peso) * 2.2
}
kgParaLbs(10)
kgParaLbs('10kg')

//Intersecção de Tipos
type Draggable={
    drag: ()=>void
}

type Resizable = {
    resize: ()=>void
}

type UiWidget = Draggable & Resizable

let textBox: UiWidget ={
    drag: ()=>{
        console.log("Arrastando o objeto")
    },
    resize: ()=>{
        console.log("Redimensionando o objeto")
    }
}

textBox.drag
textBox.resize

//Literal (exatos ou específicos)
type Quantidade = 50 | 100
let quantidade: Quantidade = 100

type Métrica = 'm' | 'metros'


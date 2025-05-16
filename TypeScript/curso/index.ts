/*
    o tsconfig.json é o arquivo de configuração do typescript que é gerado ao usar 
    o comando tsc --init no prompt de comandos na pasta onde você quer criar o projeto
    dentro do typescript temos um arquivo chamado tsconfig.json que é o arquivo de configuração do typescript
    que é basicamente um arquivo json que contém as configurações do typescript
    ao descomentar algum parametro do tsconfig.json você pode ver o que cada um faz 
    por exemplo o target que é a versão do javascript que você quer gerar
    e "outDir": "./build", basicamente é o diretório onde o typescript vai gerar os arquivos javascript  
    complidos, o padrão é o mesmo diretório do arquivo typescript

*/
/*
    Toda modificação que você fizer no arquivo typescript 
    você precisa compilar o arquivo
    para gerar o arquivo javascript, para isso você pode usar 
    o comando tsc no prompt de comandos
    ou usar o comando tsc -w para que o typescript fique monitorando as alterações
    e compile automaticamente o arquivo javascript

*/

// Fazendo um teste inicial com o typescript
// let declara a variável os dois pontos indica a tipagem dela = dados na variável
// o ponto e vírgula indica o final da linha 
// o let é uma palavra reservada do javascript que indica que a variável pode ser alterada

let strig_nome: string = "Guilherme Henrique";

console.log('Olá Mundo! meu nome é: '+strig_nome);

// tipos básicos de dados, conhecidos como primitivos: 

// string, number, boolean, null, undefined, symbol, bigint

let nome1: string = "Paulo"; // string

let idade1: number = 30; // number

let altura1: number = 1.75; // number

let ativo1: boolean = true; // boolean

let nulo1: null = null; // null

let indefinido1: undefined = undefined; // undefined

let simbolo1: symbol = Symbol("simbolo"); // symbol

//let bigint1: bigint = BigInt(10000); // bigint


console.log(nome1);
console.log(idade1);
console.log(altura1);
console.log(ativo1);
console.log(nulo1);
console.log(indefinido1);
console.log(simbolo1);

// console.log(bigint1);
// Tipos de dados compostos:


// O typeScript pode declarar variáveis explicamente como um tipo específico,
// ou implicitamente, onde o compilador do TypeScript infere o tipo da variável
// com base no valor atribuído a ela.

// Exemplo de declaração explícita:
let nome3: string = "Guilherme"; // string

// Exemplo de declaração implícita:
let nome4 = "Guilherme"; // string


// Podemos trabalhar com tipos avançados em typeScript, como:
// - Union Types: Permite que uma variável tenha mais de um tipo.
// - Any (qualquer tipo): Permite que uma variável tenha qualquer tipo de dado.
// - unknown: Permite que uma variável tenha qualquer tipo de dado, mas com segurança de tipo.
// - never: Permite que uma variável nunca tenha um valor.
// - Array: Permite armazenar múltiplos valores em uma única variável.
// - Tuple: Permite armazenar múltiplos valores de tipos diferentes em uma única variável.
// - Objetos: Permite armazenar múltiplos valores em uma única variável, com chaves e valores.
// - Intersection Types: Permite combinar múltiplos tipos em um único tipo.
// - Literal Types: Permite definir tipos específicos para variáveis.
// - Enum: Permite definir um conjunto de constantes nomeadas.
// - Tuple: Permite definir um array com tipos específicos para cada posição.
// - Union Types: Permite que uma variável tenha mais de um tipo.

// Exemplo de Union Types:
let id: number | string; // A variável id pode ser um número ou uma string

id = 123; // Atribuindo um número
console.log(id); // Saída: 123

id = "abc"; // Atribuindo uma string
console.log(id); // Saída: abc

let myVariable: string | number;

myVariable = "Hello"; // Atribuindo uma string
console.log(myVariable); // Saída: Hello
myVariable = 42; // Atribuindo um número
console.log(myVariable); // Saída: 42

// Exemplo com any
let teste: any = 100;
teste = true;
teste = false;
console.log(teste); // Saída: false

/*
    Alerta: any pode ser uma maneira útil de evitar erros, uma vez que desabilita
    a verificação de tipo, mas é importante usá-lo com cautela, pois o TypeScript 
    não será capaz de fornecer segurança de tipo e ferramentas que dependem em dados
    de tipo, como preenchimento automático, não funcionarão corretamente.
    Lembre-se, deve ser evitado a qualquer custo, pois anula a segurança 
    de tipo do TypeScript.

*/

// Exemplo com unknown
let valorDesconhecido: unknown = 100;
valorDesconhecido = 'Hello World'; // Atribuindo uma string

// armazenando o valor desconhecido em uma variável de tipo string
let converter = valorDesconhecido as string; // as define que é um tipo string
console.log(converter.length); // Saída: a quantidade de caracteres da string


/*
  unknow(desconhecido) - é uma alternativa semelhante ao any, só que mas 
  Esse tipo exige verificações ou conversões explícitas para garantir a segurança 
  de tipo durante as operações. 
*/

// Exemplo com never:
// let valor: never = 0;

/* 

    O never (nunca) - lança um erro sempre que ele é definido. never é raramente usado
    seu uso primário é em Genéricos avançados.
    let b: never = true;

*/

// Exemplo com Array:

// Declarando uma variável constante de tipo array 
const namesArray: string[] = [];
// definindo matriz de strings, na hora de definir a tipagem coloque os colchetes
// funciona para Arrays de qualquer tipo, como number, boolean, etc

// inserenido valores no array
namesArray.push("Guilherme");

// palavra-chave chamda de readonly (somente leitura), impede que matrizes sejam alteradas

const namesArray2: readonly string[] = ["Guilherme", "Paulo", "Henrique"];
// namesArray2.push("Isaque"); // Erro: não é possível adicionar valores a um array somente leitura

/*

    Inferência de tipo
    TypeScript pode inferir o tipo de uma matriz se ela tiver valores. 

*/

const numberArray3 = [1,2,3,4,5]; // O TypeScript infere que é um array de números
numberArray3.push(6) // sem erro
//numberArray3.push("Fabrica de Software") // Erro: não é possível adicionar uma string a um array de números

// definindo uma variável de tipo numérico que rescebe um valor por slicing do array de números
let number1: number = numberArray3[0]; // saida 1



// Exemplo com Tuple:
let nossaTuple: [string, number, boolean] = ["Palhaço", 30, true]; // Definindo uma tupla com três tipos diferentes
console.log(nossaTuple); // Saída: ["Palhaço", 30, true]

/*
    Basicamente uma tupla é um array(matriz) tipada com um comprimento e tipos predefinidos
    para cada índicie. As tuplas são ótimas poryqe permitem que cada elemento na matriz
    seja um tippo conhecido de valor

    Uma noa prática é sempre fazer uma tupla readonly (somente leitura)
    para evitar que os valores sejam alterados, o que pode causar erros

*/

// definindo uma tupla somente para leitura
const TuplaReadOnly: readonly [string, number, boolean] = ["Peixe",5,false]; // Definindo uma tupla somente leitura 
console.log(TuplaReadOnly); // Saída: ["Palhaço", 30, true]

// Exemplo com objetos:

const carro: {marca: string; modelo: string; ano: number} = {
    marca: "FIAT",
    modelo: "Uno",
    ano: 2010
}

/* 

    Um objeto do TypeScript não muda muito em ralação ao JavaScript
    a diferença é que no TypeScript você pode definir o tipo do objeto
    e o TypeScript vai verificar se o objeto tem as propriedades corretas
    e se os tipos das propriedades estão corretos
    O TypeScript também permite que você defina tipos para objetos
    e o TypeScript vai verificar se o objeto tem as propriedades corretas

*/

/*

    O TypeScript tenta inferir os tipos de propriedades com base em seus valores
    ou seja, ele tenta adivinha mesmo que você não tipifique, geralmente não é 
    muito interessante deixar que o TypeScript adivinhe o tipo, pois ele pode errar

*/

const car = { marca: 'Corolla'}; // Aqui ele já entendeu que é do tipo String
car.marca = 'Fusca'; // Saída: Fusca, modificando diretamente o valor da propriedade
// car.marca = 10; // Erro: não é possível atribuir um número a uma propriedade de string

/*
    No TypeScript um objeto pode ter propriedades opcionais.
    Propriedades opcionais são propriedades que não precisam ser definidas na 
    definição do objeto. Elas podem ser usadasa depois ou não, sõa opcionais
    Para definir uma propriedade opcional, basta adicionar um ponto de interrogação
    (?) após o nome da propriedade.
*/

// exemplos de propriedades opcionais:
const car2: { marca: string, motor?: number} = {
    marca: "Toyota"

}
// motor é uma propriedade opcional dentro deste objeto car2

// colocando motor no carro
car2.motor = 1.0;
console.log('Acabei de definir o motor do Carro: '+ car2.motor); 


/* 
    Assinatura de índicie - As assinaturas de índicie podem ser usadas para objetos
    sem uma lista definida de propriedades.

*/

const nomeIdade:{[index: string]: number} = {};
nomeIdade["Index_string"] = 35;

console.log(nomeIdade["Index_string"]); // Saída: 35

// Exemplo de Intersection Types:
type Pessoa = {
    nome: string;
    idade: number;
};
type Funcionario = {
    cargo: string;
};
type FuncionarioPessoa = Pessoa & Funcionario; // Combina os tipos Pessoa e Funcionario


// O TypeScript também permite a declaração de variáveis com tipos compostos,
// como arrays e objetos. Aqui estão alguns exemplos:

// Declaração de um array de números
let numeros: number[] = [1, 2, 3, 4, 5];

// Declaração de um array de strings

let frutas: string[] = ["maçã", "banana", "laranja"];

// Declaração de um array de booleanos
let booleanos: boolean[] = [true, false, true];

// Declaração de um array de objetos
let pessoas: { nome: string; idade: number }[] = [
    { nome: "Guilherme", idade: 30 },
    { nome: "Paulo", idade: 25 },
];
// Declaração de um objeto
let pessoa: { nome: string; idade: number; ativo: boolean } = {
    nome: "Guilherme",
    idade: 30,
    ativo: true,
};
// Declaração de um objeto com propriedades opcionais
let pessoa2: { nome: string; idade?: number; ativo?: boolean } = {
    nome: "Guilherme",
};
let pessoa3: { nome: string; idade?: number; ativo?: boolean } = {
    nome: "Guilherme",
    idade: 30,
};
let pessoa4: { nome: string; idade?: number; ativo?: boolean } = {
    nome: "Guilherme",
    idade: 30,
    ativo: true,
};


// Aliases e Interferfaces 

/*
    Basicamente é criar osseus próprios tipos personalizados

   Os aliases de tipo permitem definir tipos com um nome
   personalizado (um alias) de tipos primitivos ou complexos.
   
   Por boa prática, colocar a primeira letra maiúscula ao criar um alias
   
    As interfaces são a mesma coisa que os aliases =, exceto que só se aplicam 
    ao tipo objeto
*/


// Aliases (Criando nossos tipos personalizados):
type AnoVeiculo = number; // criando um tipo personalizado para o ano do veículo que rescebe um número
type MarcaVeiculo = string;
type ModeloVeiculo = string;
type Carro = {
    ano: AnoVeiculo;
    marca: MarcaVeiculo;
    modelo: ModeloVeiculo;
}

// type é para expecificar que vamos criar um tipo personalizado com alias

// EXEMPLO DE USO:

const uno: AnoVeiculo = 2025;
const gol: MarcaVeiculo = "Wolksvagen";
const TSI: ModeloVeiculo = "Up";
const laFerrari: Carro = {
    ano: 2025,
    marca: "Ferrari",
    modelo:"La Ferrari"
}

// INTERFACES (Criando nossos tipos personalizados):

//Lembrando que interfaces são apenas para objetos
interface Retangulo{
    altura: number;
    largura: number;
};

const novoItem: Retangulo = {
    altura:10,
    largura: 20
}

// ESTENDENDO INTERFACES - Herdar propriedades do original e adcionar algo.
interface RetanguloColorido extends Retangulo{
    cor: string;
};

// Exemplo de uso:
const novoItem2: RetanguloColorido = {
    altura: 10,
    largura: 20,
    cor: "azul"
}

console.log('Esse é o nosso novo item com interface extendida:' + novoItem);


/* 
    Funções com TypeScript 
    TypeScript tem uma sintaxe específica para digitar parÂmetros de função 
    e valores de retorno.

    Sintaxe:

    function nomeDaFuncao(parametro1: tipo, parametro2: tipo): tipoDeRetorno {
        // corpo da função
    }
    
*/

function getTime(): number{
    return new Date().getTime();
};

/*
    Veja que o retorno da função precisa ser um número, pois tipificamos o retorno
*/

// Void - Quando a função não tem retorno 
function printHello(): void {
    console.log('Hello');
}

/*
    Veja a função não ira retornar nada, pois tipificamos o retorno como void
*/

// Tipos em parâmetros de função
function somar(a: number, b: number): number{
    return a + b;
}

console.log('A soma de a + b é: ', somar(10,20));

// Parametros opcionais
// o operador '?' aqui marca que é o parametro 'c' é opcional

function add(a: number, b: number, c?: number): number{
    return a + b + (c || 0);

}

// Parametro com valores iniciais padrão 
function saudacao(name: string = "Saude e Prosperidade"): void{

    console.log(`Olá,  + ${name}!`);

        /* 

        O `${}` dentro de uma *template string* (criada com crases: `) é usado para 
        interpolar expressões JavaScript dentro de strings. Isso torna a concatenação de
        strings e variáveis mais legível e prática.

        É semelhante às *f-strings* do Python, onde você insere variáveis diretamente na
        string com `{}` prefixado por `f`.

        Exemplo:
        const nome = "Maria";
        console.log(`Olá, ${nome}!`); // Saída: Olá, Maria!

    */

}
saudacao(); // Saída: Olá Saude e Prosperidade!

// Parametros nomeados (Named Parameters)
               
function hello({nome,idade}:{nome: string, idade: number}): void {

    console.log(`Hello, ${nome}! Você tem ${idade} anos!`);


    /* 
        Parâmetros nome, idade são passados como um objeto, o que permite passar os 
        tipos de dados de cada parâmetro posteriormente
    
    */
};

// Exemplo de uso:
hello({nome: 'Mundo', idade: 2025}) // Saida - Hello, Mundo! Você tem 2025 anos!

/*
    GENERICS (Genéricos)
    Pense nos generics como "caixas" flexíveis, onde você pode colocar 
    diferentes tipos de dados. É um coringam que pode aceitar um valor
*/ 

function imprimir<T>(valor: T): void {
    console.log(valor);
}

imprimir<number>(10);
imprimir<string>('Cavalo!');
imprimir<boolean>(true);

/*
    Consegui perceber a logica do generics?
    
    Um tipo genérico é um placeholder (como T, U, K, V, etc.) que representa um tipo que
    será definido na hora de usar a função, classe ou interface.

    T: Type (geral)

    K: Key

    V: Value

    U: outro tipo (usado em comparação com T)
*/
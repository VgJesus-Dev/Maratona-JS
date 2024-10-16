// Variáveis e Operações Matemáticas 
// 1. Crie um programa que peça ao usuário um valor em graus Celsius e converta para Fahrenheit. 
function converter(){
    let celsius = 23.1;
    let fahrenheit = (celsius * 9/5) + 32;
    console.log(`${celsius}°C é equivalente a ${fahrenheit}°F`);
}
converter();


// 2. Solicite ao usuário a base e a altura de um triângulo e calcule sua área. 
function areaTriangulo(){
    let base = 5;
    let altura = 4;
    let area = (base * altura)/2;
    console.log(`A área do triângulo é ${area}`);
}
areaTriangulo();


// 3. Peça ao usuário um número e exiba o seu quadrado e seu cubo. 
function elevar(){
    let num = 2;
    let quadrado = (num ** 2);
    let cubo = (num ** 3);
    console.log(`O número ${num} elevado ao quadrado é ${quadrado} e ao cubo é ${cubo}`);
}
elevar();


// 4. Solicite dois números ao usuário e exiba a potência do primeiro número elevado ao segundo.
function potencia(){
    let numero = 5;
    let expoente = 3;
    let resultado = (numero ** expoente);
    console.log(`O número ${numero} elevado a ${expoente} tem como resultado ${resultado}`);
}
potencia();



//Condicionais 
//1. Escreva um programa que peça ao usuário um número e informe se ele está entre 1 e 100. 
function entreNumero(){
    let num = 100;
    if (num >= 1 && num <= 100){
        console.log(`O número ${num} está entre 1 e 100!`);
    }else {
        console.log(`O número ${num} não está entre 1 e 100!`);
    }
}
entreNumero();

//2. Implemente uma função que recebe a idade de uma pessoa e retorna uma mensagem informando se ela é criança, adolescente ou adulta. 
function classeIdade(){
    let idade = 18;
    if (idade <= 12){
        console.log("Conforme a idade informada, é considerado criança!");
    } else if (idade >= 13 && idade <= 17){
        console.log("Conforme a idade informada, é considerado adolescente!");
    }else{
        console.log("Conforme a idade informada, é considerado adulto!");
    }
}
classeIdade();

//3. Crie um programa que solicite um mês (de 1 a 12) e informe quantos dias esse mês possui. 
function diasMes(){
    let mes = 11;
    let dias;
    if (mes === 2){
        dias = 28;
    } else if (mes === 4 || mes === 6 || mes === 9 || mes === 11){
        dias = 30;
    }else{
        dias = 31
    }
    console.log(`O mês ${mes} tem ${dias} dias.`)
}
diasMes();

//4. Escreva um programa que peça ao usuário um número e verifique se ele é positivo, negativo ou zero. 
function verificacao(){
    let num = -15;
    if (num > 0){
        console.log(`O número ${num} é positivo`);
    }else if (num < 0){
        console.log(`O número ${num} é negativo`);
    }else{
        console.log("O número é zero");
    }
}
verificacao();


//Funções 
//1. Crie uma função que aceita dois números e retorna o resultado da divisão do primeiro pelo segundo. Lide com divisões por zero. 
function divisao(){
    let num1 = 15;
    let num2 = 0;
    resultado = (num1 / num2);
    if (num2 === 0){
        console.log("Não podemos dividir por zero.");
    }else{
        console.log(`${num1} divido por ${num2} é ${resultado}`);
    }
}
divisao();

//2. Escreva uma função que recebe uma lista de strings e retorna a lista ordenada em ordem alfabética. 
function listaAlfabetica(){
    let lista = "Homem-aranha, Flash, Capitão América";
    let listaSeparada = lista.split(",");
    listaSeparada.sort();
    console.log(`Segue a lista que informou em ordem alfabética:${listaSeparada.join(", ")}`)
}
listaAlfabetica();
//3. Escreva uma função que aceita um array de inteiros e retorna o maior número presente. 
function arrayNumeros(){
    let inteiros = [10,2,43,32,54,140,340,888];
    let maiorNumero = Math.max(...inteiros);
    console.log(`O maior número presente dentro da lista informada é: ${maiorNumero}`)
}
arrayNumeros();
//4. Implemente uma função que recebe uma string e retorna a mesma string invertida.
function inverterString(){
    let palavra = "carro";
    let invertida = palavra.split("").reverse().join("");
    console.log(`A palavra informada invertida fica assim: ${invertida}`)
}
inverterString();


//Laços 
//1. Escreva um programa que imprima todos os números ímpares de 1 a 100. 
function numImpares(){
    for(let i = 1; i <= 100; i++){
        if (i % 2 !== 0){
            console.log(i);
        }
    }
}
numImpares();

//2. Escreva um programa que imprima todos os números de 1 a 50 e indique quais são múltiplos de 5. 
function multiplos(){
    for(let i = 1; i <= 50; i++){
        if(i % 5 === 0){
            console.log(`${i} é múltiplo de 5`);
        }else{
            console.log(i);
        }
    }
}
multiplos();
//3. Faça um programa que peça um número ao usuário e calcule a soma de todos os números de 1 até esse número.
function somaNumeros(){
    let num = 5;
    let soma = 0;
    for(let i = 1; i <= num; i++){
        soma += i;
    }
    console.log(`A soma de 1 até o número ${num} é: ${soma}`)
}
somaNumeros();



//Manipulação de Objetos
//1. Crie um array de objetos "Produto" e escreva uma função que calcule o valor total em estoque.
let produtos = [
    {
        nome: "produto 1", quantidade: 5, preco: 10.55
    },{
        nome: "prduto 2", quantidade: 4, preco: 15.50
    },{
        nome: "produto 3", quantidade: 2, preco: 5.40
    }
];

function estoqueValorTotal(produtos){
    let soma = 0;
    for(let produto of produtos){
        soma += produto.quantidade*produto.preco;
    }
    console.log(`O valor total de estoque é: R$${soma}`);
}
estoqueValorTotal(produtos);

//2. Implemente um método em um objeto "Estudante" que retorna se o estudante está aprovado ou reprovado, com base em suas notas.
let estudantes = [
    {nome: "Vitor", notas: [10, 7, 9]},
    {nome: "Alan", notas: [5, 6, 6]},
    {nome: "Paula", notas: [3, 6, 3]}
];

function aprovadoReprovado(estudantes){
    estudantes.forEach(estudante => {
        let media = estudante.notas.reduce((acc, nota) => acc + nota, 0) / estudante.notas.length;

        let resultado = {
            nome: estudante.nome, status: media >= 6 ? "Aprovado" : "Reprovado"
        };
        console.log(`O aluno ${resultado.nome} obteve média ${(media).toFixed(2)}, sendo assim está: ${resultado.status}`);
    });
}
aprovadoReprovado(estudantes);

//3. Crie uma função que, dada uma lista de objetos "Funcionario", calcule a soma dos salários.
let salarioFuncionarios = [
    {nome: "funcionario 1", salario: 5000},
    {nome: "funcionario 2", salario: 3550},
    {nome: "funcionario 3", salario: 2800}
];
function salarioTotalFuncionarios(){
    let somaSalarios = 0;
    for(let funcionario of salarioFuncionarios){
        somaSalarios += funcionario.salario; 
    }
    console.log(`O valor total dos salários é: R$${somaSalarios}`)
}
salarioTotalFuncionarios();

//4. Crie uma lista de objetos "Estudante" e escreva uma função que retorna os estudantes que estão acima da média de notas.
let notasEstudantes = [
    {nome: "Camila", media: 6},
    {nome: "Paola", media: 3},
    {nome: "Cristina", media: 10}
];

function aprovados(notasEstudantes){
    for(let estudante of notasEstudantes){
        if(estudante.media >= 6){
            console.log(`Estudante ${estudante.nome} está aprovado.`)
        };
    }
}
aprovados(notasEstudantes);



//Funções com Objetos
//1. Crie uma função que recebe um array de objetos "Produto" e calcula a média de preços.
let produtosMedia = [
    {nome: "Produto 1", preco: 15.55},
    {nome: "Produto 2", preco: 23.55},
    {nome: "Produto 3", preco: 43.55},
];

function mediaPreco(produtosMedia){
    let somaPrecos = 0;
    for(let produto of produtosMedia){
        somaPrecos += produto.preco;
    }
    let media = somaPrecos / produtosMedia.length;
    console.log(`A média dos preços dos produtos é R$: ${media}`);
}
mediaPreco(produtosMedia);
//2. Escreva uma função que, dada uma lista de objetos "Aluno", retorna a lista de alunos que têm nota acima de 8.
let alunos = [
    {nome: "Vitor", nota: 7},
    {nome: "Maria", nota: 9},
    {nome: "Cristina", nota: 10},
    {nome: "Kaique", nota: 5}
];

function notaAcima(alunos){
    let aprovados = [];
    for(let aluno of alunos){
        if(aluno.nota > 8){
            aprovados.push(aluno.nome);
        }
    }
    if(aprovados.length > 0){
        console.log(`Os alunos com nota acima de 8 são: ${aprovados.join(', ')}`);
    }else{
        console.log("Nenhum aluno com nota superior a 8")
    }
}
notaAcima(alunos);
//3. Implemente uma função que aceita um array de objetos "Funcionario" e retorna o funcionário com o maior salário.
let funcionariosEsalarios = [
    {nome: "Funcionario Silva", salario: 22000},
    {nome: "Funcionario Gomes", salario: 33550},
    {nome: "Funcionario Pedro", salario: 22800}
];

function funcMaiorSalar(funcionariosEsalarios){
    let salarioMaior = Math.max(...funcionariosEsalarios.map(f => f.salario));

    let funcComMaiorSalario = funcionariosEsalarios.find(funcionario => funcionario.salario === salarioMaior);

    console.log(`O funcionario ${funcComMaiorSalario.nome} é o que tem o maior salário de R$:${salarioMaior}`)
}
funcMaiorSalar(funcionariosEsalarios);


//4. Escreva uma função que, dada uma lista de objetos "Pessoa", retorne as pessoas que têm mais de 30 anos
let idadePessoas = [
    {nome: "Vitor Gomes", idade: 31},
    {nome: "Kaique Gomes", idade: 18},
    {nome: "João Vitor", idade: 34}
];

function retornarMaiorIdade(idadePessoas){
    let maiorDe30 = idadePessoas.filter(pessoa => pessoa.idade > 30);
    
    let nomesMaiorDe30 = maiorDe30.map(p => p.nome).join(", ");

    console.log(`As pessoas que tem mais de 30 anos são: ${nomesMaiorDe30}`);
}
retornarMaiorIdade(idadePessoas);
/********************************************************************
 * Objetivo: projeto para realizar o calculo de médias escolares 
 * Autor: Kaique
 * Data: 29/01/2026
 * Versão: 1.0
 *******************************************************************/

/*
      Tipos de criação de variáveis

      var -> Permite criar um espaço na memória do tipo variável.
               Essa forma de criação hoje é considerada mais antiga,
               é provavel que seja encontrada apenas em projetos
               mais antigos.
               Dica: Caso precise utilize o var, recomenda-se 
               que seja utilizado em apenas escopo global.

      let -> Permite criar um espaço em memória do tipo variável.
               Essa forma de criação é realiza somente no escopo
               local, ou seja, dentro de bloco de programação { }
               esse tipo de variável deixa de existir ao término 
               do bloco.

      const -> Permite criar um espaço em memória do tipo constante,
               ou seja, esse conteúdo não podera sofrer mudanças durante
               o projeto.
               Dica: Se possível você pode criar essa const inteiramente
               em MAIUSCULO para facilitar sua utilização. Podendo ser
               criada de forma local ou global.

      Operadores de comparação

         == -> Permite a comparação de dois conteúdos
         != -> Permite comparar a diferença de dois conteúdos
         <  -> Permite validar o valor menor
         >  -> Permite validar o valor maior
         <= -> Permite validar se o valor é menor ou igual
         >= -> Permite validar se o valor é maior ou igual
         ===   -> Permite comparar a igualdade dos conteúdos e
                  a igualdade da tipagem de dados
         !==   -> Permite comparar a diferença de conteúdos e
                  a igualdade da tipagem de dados
         ==!   -> Permite comparar a igualdade dos conteúdos e
                  a difenrença da tipagem de dados

      Tipos de operadoa lógicos
         E -> AND ->  &&
         OU -> OR -> ||
         NAO -> NOT -> !

      Formas de conversão de tipos de dados
         parseInt() -> Permite converter um conteúdo em numero do tipo INTEIRO
         ParseFloat() -> Permite converter um conteúdo em número do tipo DECIMAL
         Number() -> Permite converter um conteúdo para NÚMERO, podendo ser
                     inteiro ou decimal
         String() -> Permite converter um conteúdo em STRING
         Boolean() -> Permite converter um conteúdo para BOOLEANO (true ou false)
         typeof() -> Retorna tipo de dados de uma variável
                     (Strinf, Number, Boolean ou Object)



*/
//Import da biblioteca
const readline = require('readline')

//Criação do objeto para captar as entradas de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Entrada de dados do nome
entradaDeDados.question('Digite o nome do aluno: ', function(nome){
      //Recebe o nome do Aluno
      let nomeAluno = nome

      entradaDeDados.question('Digite o nome da escola: ', function(escola){
         //Recebe o nome da Escola
         let nomeEscola = escola

      //Entrada de dados da nota1
      entradaDeDados.question('Digite a nota 1: ', function(valor1){
         let nota1 = valor1

         //Entrada de dados da nota2
         entradaDeDados.question('Digite a nota 2: ', function(valor2){
            let nota2 = valor2

            //Entrada de dados da nota3
            entradaDeDados.question('Digite a nota 3: ', function(valor3){
               let nota3 = valor3

               //Entrada de dados da nota4
               entradaDeDados.question('Digite a nota 4: ', function(valor4){
                  let nota4 = valor4

                  let somaDasNotas = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4) )

                  //Validação de entrada vazia
                  if(nomeAluno == '' || nomeEscola == ''|| nota1 == '' || nota2 == '' || nota3 == '' || nota4 == ''){
                     console.log("ERRO: Existem campos obrigatórios que não foram preenchidos!!!")
                  //Validação númerica   
                  }else if(nota1<0 || nota1>100 || nota2 < 0 || nota2 >100 || nota3 < 0 || nota3 >100 || nota4 < 0 || nota4 >100){
                     console.log("ERRO: Existem campos que não foram preenchidos corretamente, coloque notas entre 0 até 100")
                  //Validação de número ou letra
                  //isNan() -> Permite validar se é um número ou letra
                  }else if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)){
                     console.log("Somente números são permitidos na entrada das notas")
                  }else {

                     let statusDoAluno
                     
                     let media = Number(somaDasNotas) / 4;

                     if (media >= 70){

                        statusDoAluno = "Aprovado"

                     }else if (media <= 50){

                        statusDoAluno = "Reprovado"

                     }else {

                        statusDoAluno = "Em recuperação"
                     }

                     console.log("------------------------------------------------")

                     console.log("Status Final do Aluno: ")
                     console.log("")
                     console.log("O Aluno(a):", nome ,", da escola:", nomeEscola )
                     //toFixed -> é um método que permite fixar a qtde de casas decimais
                     console.log("Resultado da média: ", media.toFixed(2) ," = ", statusDoAluno)
                     console.log("")

                     console.log("------------------------------------------------")
                     
                  }
                     

            })//Fecha nota1
         })//Fecha nota2
      })//Fecha nota3
   })//Fecha nota4
 })//Fecha nome da escola
})//Fecha nome




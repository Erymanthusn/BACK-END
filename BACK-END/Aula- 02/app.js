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

                  if(nomeAluno == '' || nota1 == '' || nota2 == '' || nota3 == '' || nota4 == ''){
                     console.log("ERRO")
                  }else{
                     console.log('Calcular')
                  }

            })//Fecha nota1
         })//Fecha nota2
      })//Fecha nota3
   })//Fecha nota4
})//Fecha nome
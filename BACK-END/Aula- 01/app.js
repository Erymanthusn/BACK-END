//Primeira Aula//
/*
   Primeira
   Aula
*/

//permite exibir conteúdo no terminal
console.log("Testando o JS")

//Permite criação de variavél
var nome = "Kaique"

console.log(nome)
//Concatenação de dados (texto e variavél)
console.log("O nome do usuário é: " + nome)
console.log(`O nome do usuário é: ${nome}`)

//Import da biblioteca do readline
//Serve para permitir a entrada de dados via terminal
var readline = require("readline")

//Cria um objeto especialista em entrada de dados pelo terminal
var entradaDeDados = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
})

//Permite a entrada de dados do nome do usuário
//question = utiliza uma função de callback para devolver o valor digitado

//CALLBACK = é uma função particular de um metódo, que é chamada para
//encaminhar um conteúdo para o desenvolvedor, esse conteúdo vem através
//da variável no argumento "nomeUsuario"

entradaDeDados.question("Digite seu nome: ", function(nomeUsuario){
   console.log("O nome digitado foi: "+ nomeUsuario)

   entradaDeDados.question("Digite seu E-mail: ", function(emailUsuario){
      console.log(`O e-mail do usuário ${nomeUsuario} é ${emailUsuario}`)
   })

      entradaDeDados.question("Digite seu número: ", function(emailUsuario){
         console.log(`O e-mail do usuário ${nomeUsuario} é ${emailUsuario}`)
      })

         entradaDeDados.question("Digite seu CEP: ", function(emailUsuario){
            console.log(`O e-mail do usuário ${nomeUsuario} é ${emailUsuario}`)
         })
})


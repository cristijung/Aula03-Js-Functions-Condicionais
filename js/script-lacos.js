//Laços de Repetição
//For

// for (i = 0; i <= 20; i++) {
//     console.log(i)
// }
//------------------------------
// Exemplo Dois
// const contratadoEm = 2010;
// const anoAtual = 2023;

// const salarioInicial = 4567.96;
// let salario = salarioInicial;
// let percentualAumento = 1.5 / 100;

// console.log(`Ano atual: ${contratadoEm}`);
// console.log(`O salário atual é: R$${salario.toFixed(2)}`);

// for (let ano = contratadoEm + 1; ano <= anoAtual; ano++) {
//   if (ano >= 2020) {
//     percentualAumento = percentualAumento * 2;
//   }
//   salario = salario + (salario * percentualAumento);
//   console.log(`\n\nAno atual: ${ano}`);
//   console.log(`O percentual de aumentto foi ${percentualAumento * 100}%`);
//   console.log(`O salário atual é: R$${salario.toFixed(2)}`);
// }
// const percentualAumentoTotal = (salario / salarioInicial) * 100;
// console.log(
//   `\n\nEm comparação ao seu salário inicial, você teve um aumento de ${percentualAumentoTotal.toFixed(
//     2
//   )}%`
// );
//----------------------------------------------------------------------
//FOR IN e FOR OFF
//for in
const capitais = {
    a: "Porto Alegre",
    b: "Florianópolis",
    c: "Curitiba",
    d: "São Paulo"
};

for (let chave in capitais) {
    console.log(chave + ": " + capitais[chave]);
}

const frutas = ['maçã', 'banana', 'melancia', 'uva', 'laranja'];
for (const fruta of frutas) {
    console.log(fruta);
}

const palavra = 'oie';
for (const letra of palavra) {
  console.log(letra);
}

//------------------------------------------------
//Do While e While

let contador = 0;
const loopDoWhile = () => {
  do {
    console.log(`Contador: ${contador}`);
    contador++;
  } while (contador <= 10);
}

loopDoWhile();

let salario = 5000;
while (salario < 10000) {
  salario += 100;
  console.log(`O salário r: ${salario}`);
}

//if/else

const idade = 18;

if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}
//-------------------------------------------
const hour = new Date().getHours();
if (hour < 18) {
  console.log("Bom dia!");
} else {
  console.log("Boa Tarde!");
}

//-------------------------------------------
const hora = 22;
if (hora <= 12) {
  console.log("Bom dia!");
} else if (hora < 18) {
  console.log("Boa Tarde");
} else {
  console.log("Boa Noite!!!");
}

//------------------------------------------
const salario = 10000;
let bonus = salario * (salario < 10000 ? 0.35 : 0.25);
console.log(bonus);

const aluno = "Pafúncio";
const situacao = 6.4;
let resultadoAnoLetivo = situacao >= 7 ? "Aprovado" : "Reprovado";
console.log(
  `O resultado do ano letivo de ${aluno} é: ${resultadoAnoLetivo} com média final de: ${situacao}`
);
// Switch Case
//-----------------------------------------
let diaDaSemana = 4;
let mensagem;

switch (diaDaSemana) {
  case 1:
    mensagem = "Hoje é domingo";
    break;
  case 2:
    mensagem = "Hoje é segunda";
    break;
  case 3:
    mensagem = "Hoje é terça";
    break;
  case 4:
    mensagem = "Hoje é quarta";
    break;
  case 5:
    mensagem = "Hoje é quinta";
    break;
  case 6:
    mensagem = "Hoje é sexta";
    break;
  case 7:
    mensagem = "Hoje é sábado";
    break;
  default:
    mensagem = "Este dia não existe!!";
}

console.log(mensagem);

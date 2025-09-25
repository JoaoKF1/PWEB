var notas = function() {
  var nome = prompt("Qual seu nome?");
  var nota1 = parseFloat(prompt("Insira nota 1"));
  var nota2 = parseFloat(prompt("Insira nota 2"));
  var nota3 = parseFloat(prompt("Insira nota 3"));
  var nota4 = parseFloat(prompt("Insira nota 4"));

  var media = (nota1 + nota2 + nota3 + nota4) / 4;

  let confirmar = confirm("Deseja ver a média de " + nome + "?");
  if(confirmar){
      alert("A média do aluno " + nome + " é: " + media);
  }else{
      alert("Operação finalizada");
  }
}

notas();

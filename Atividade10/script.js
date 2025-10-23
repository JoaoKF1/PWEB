function obterIMC(peso, alturaCm) {
  let alturaM = alturaCm / 100;
  return peso / (alturaM * alturaM);
}

function classificacaoIMC(imc) {
  if (imc < 18.5) {
    return ["Magreza", "Obesidade Grau 0"];
  } else if (imc < 25) {
    return ["Normal", "Obesidade Grau 0"];
  } else if (imc < 30) {
    return ["Sobrepeso", "Obesidade Grau I"];
  } else if (imc < 40) {
    return ["Obesidade", "Obesidade Grau II"];
  } else {
    return ["Obesidade Grave", "Obesidade Grau III"];
  }
}

function calcularIMC() {
  let peso = Number(prompt("Digite o peso (kg):"));
  let altura = Number(prompt("Digite a altura (em centímetros):"));
  let imc = obterIMC(peso, altura);
  let [classificacao, grau] = classificacaoIMC(imc);
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `
    <p><strong>IMC:</strong> ${imc.toFixed(2)}</p>
    <p><strong>Classificação:</strong> ${classificacao}</p>
    <p><strong>${grau}</strong></p>
  `;
}

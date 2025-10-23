function maiorNumero(a, b, c) {
  return Math.max(a, b, c);
}

function ordemCrescente(a, b, c) {
  let numeros = [a, b, c];
  numeros.sort((x, y) => x - y);
  return numeros;
}

function ehPalindromo(texto) {
  let str = texto.toUpperCase();
  let invertida = str.split('').reverse().join('');
  return str === invertida ? "É palíndromo" : "Não é palíndromo";
}

function tipoTriangulo(a, b, c) {
  if (a + b <= c || a + c <= b || b + c <= a) {
    return "Não formam um triângulo";
  } else if (a === b && b === c) {
    return "Triângulo equilátero";
  } else if (a === b || a === c || b === c) {
    return "Triângulo isósceles";
  } else {
    return "Triângulo escaleno";
  }
}

function executarFuncoes() {
  let saida = document.getElementById("resultado");
  saida.innerHTML = "";

  let n1 = Number(prompt("Digite o primeiro número:"));
  let n2 = Number(prompt("Digite o segundo número:"));
  let n3 = Number(prompt("Digite o terceiro número:"));
  saida.innerHTML += `<p><strong>Maior número:</strong> ${maiorNumero(n1, n2, n3)}</p>`;

  let ordem = ordemCrescente(n1, n2, n3);
  saida.innerHTML += `<p><strong>Ordem crescente:</strong> ${ordem.join(", ")}</p>`;

  let palavra = prompt("Digite uma palavra para verificar se é palíndromo:");
  saida.innerHTML += `<p><strong>${palavra.toUpperCase()}:</strong> ${ehPalindromo(palavra)}</p>`;

  let lado1 = Number(prompt("Digite o primeiro lado do triângulo:"));
  let lado2 = Number(prompt("Digite o segundo lado do triângulo:"));
  let lado3 = Number(prompt("Digite o terceiro lado do triângulo:"));
  saida.innerHTML += `<p><strong>Triângulo:</strong> ${tipoTriangulo(lado1, lado2, lado3)}</p>`;
}

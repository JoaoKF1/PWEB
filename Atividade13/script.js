const janela = document.getElementById("janela");
const titulo = document.getElementById("titulo");

let estado = "fechada";

janela.addEventListener("mouseover", abrirJanela);
janela.addEventListener("mouseout", fecharJanela);
janela.addEventListener("click", quebrarJanela);

function abrirJanela() {
  if (estado !== "quebrada") {
    janela.src = "janelaAberta.png";
    titulo.textContent = "Janela Aberta";
  }
}

function fecharJanela() {
  if (estado !== "quebrada") {
    janela.src = "janelaFechada.png";
    titulo.textContent = "Janela Fechada";
  }
}

function quebrarJanela() {
  if (estado === "quebrada") {
    estado = "fechada";
    fecharJanela();
  } else {
    estado = "quebrada";
    janela.src = "janelaQuebrada.png";
    titulo.textContent = "Janela Quebrada";
  }
}

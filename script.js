function adicionarJogadores() {
  var containerMasculino = document.getElementById("jogadoresMasculinos");
  var containerFeminino = document.getElementById("jogadoresFemininos");

  for (var i = 0; i < jogadores.length; i++) {
    var jogador = jogadores[i];

    var divJogador = document.createElement("div");
    divJogador.classList.add("jogador");

    var img = document.createElement("img");
    img.src = jogador.imagem;
    img.classList.add("foto-jogador"); // Adiciona a classe "foto-jogador" à imagem
    img.addEventListener("mouseover", function () {
      ampliarImagem(this);
    });
    img.addEventListener("mouseout", function () {
      reduzirImagem(this);
    });
    img.addEventListener("click", criarRedirecionamento(jogador));
    divJogador.appendChild(img);

    var pNome = document.createElement("p");
    pNome.classList.add("nome-jogador");
    pNome.textContent = jogador.nome;
    divJogador.appendChild(pNome);

    // ... outros elementos e informações do jogador

    if (jogador.elenco === "masculino") {
      containerMasculino.appendChild(divJogador);
    } else if (jogador.elenco === "feminino") {
      containerFeminino.appendChild(divJogador);
    }
  }
}

function ampliarImagem(imagem) {
  imagem.classList.add("ampliar-imagem");
}

function reduzirImagem(imagem) {
  imagem.classList.remove("ampliar-imagem");
}

function criarRedirecionamento(jogador) {
  return function () {
    redirecionarParaDetalhesJogador(jogador);
  };
}

function redirecionarParaDetalhesJogador(jogador) {
  // Armazena a URL da imagem do jogador no sessionStorage
  sessionStorage.setItem('fotoAmpliada', jogador.imagem);

  // Altere "detalhes.html" para o nome do arquivo HTML que exibirá as informações detalhadas do jogador
  window.location.href = "detalhes.html?nome=" + jogador.nome;
}

  

  
  

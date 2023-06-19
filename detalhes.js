// Obtém o parâmetro de consulta da URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

// Obtém o nome do jogador da foto clicada
const jogadorNome = urlParams.get('nome');

// Função para obter um jogador pelo nome
function obterJogadorPorNome(nome) {
  for (let i = 0; i < jogadores.length; i++) {
    if (jogadores[i].nome.toLowerCase() === nome.toLowerCase()) {
      return jogadores[i];
    }
  }
  return null;
}

// Função para exibir os detalhes do jogador
function exibirDetalhesJogador(nome) {
  // Obter o jogador pelo nome
  const jogador = obterJogadorPorNome(nome);

  // Verificar se o jogador foi encontrado
  if (jogador) {
    // Atualizar as informações na página
    const fotoAmpliada = document.getElementById("fotoAmpliada");
    fotoAmpliada.src = jogador.imagem;
    fotoAmpliada.classList.add("foto-jogador"); // Adiciona a classe "foto-jogador" à imagem
    document.getElementById("nomeJogador").textContent = jogador.nome;
    document.getElementById("posicaoJogador").textContent = jogador.posicao;
    document.getElementById("nomeCompletoJogador").textContent = "Nome completo: " + jogador.nome_completo;
    document.getElementById("nascimentoJogador").textContent = "Data de nascimento: " + jogador.nascimento;
    document.getElementById("alturaJogador").textContent = "Altura: " + jogador.altura + "m";
    document.getElementById("descricaoJogador").textContent = jogador.descricao;
  } else {
    // Jogador não encontrado, exibir mensagem de erro
    document.getElementById("nomeJogador").textContent = "Jogador não encontrado";
  }
}

// Chama a função para exibir os detalhes do jogador
exibirDetalhesJogador(jogadorNome);






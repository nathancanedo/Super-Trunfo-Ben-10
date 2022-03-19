//colocar imagem nas cartas

var carta1 = {
  nome: "Ben 10",
  imagem: "https://pbs.twimg.com/media/FG7R5d8XIAIhebN?format=jpg",
  atributos: {
    ataque: 5,
    defesa: 3,
    poder: 1
  }
};

var carta2 = {
  nome: "Besta",
  imagem: "https://pbs.twimg.com/media/E8s2TeRXIAQc3wa?format=jpg",
  atributos: {
    ataque: 9,
    defesa: 5,
    poder: 6
  }
};

var carta3 = {
  nome: "Quatro Braços",
  imagem: "https://pbs.twimg.com/media/EwpuopEXAAEE1QG.jpg",
  atributos: {
    ataque: 9,
    defesa: 6,
    poder: 1
  }
};
var carta4 = {
  nome: "Fantasmático",
  imagem: "https://pbs.twimg.com/media/FDCjs01WQAEGroc?format=jpg&name=900x900",
  atributos: {
    ataque: 5,
    defesa: 3,
    poder: 9
  }
};

var carta5 = {
  nome: "Ultra T",
  imagem: "https://pbs.twimg.com/media/E_nz2HNXoAE0MFm?format=jpg",
  atributos: {
    ataque: 7,
    defesa: 5,
    poder: 7
  }
};

var carta6 = {
  nome: "Arraia-à-Jato",
  imagem: "https://pbs.twimg.com/media/FKTGbIjXwAA-xHY?format=jpg",
  atributos: {
    ataque: 4,
    defesa: 5,
    poder: 9
  }
};

var carta7 = {
  nome: "Enormossauro",
  imagem: "https://pbs.twimg.com/media/FIoQuNtXoAAITRG?format=jpg",
  atributos: {
    ataque: 9,
    defesa: 6,
    poder: 1
  }
};

var carta8 = {
  nome: "Eco Eco Supremo",
  imagem: "https://pbs.twimg.com/media/FEp4ZfrXMAcC5sp?format=jpg",
  atributos: {
    ataque: 5,
    defesa: 9,
    poder: 8
  }
};
var carta9 = {
  nome: "Snare-oh",
  imagem: "https://pbs.twimg.com/media/E-oN9TPWUAMr0SN?format=jpg&name=900x900",
  atributos: {
    ataque: 5,
    defesa: 9,
    poder: 10
  }
};
var carta10 = {
  nome: "Macaco-Aranha",
  imagem: "https://pbs.twimg.com/media/FJ_L01_XMAY4yV8?format=jpg",
  atributos: {
    ataque: 7,
    defesa: 5,
    poder: 4
  }
};
var carta11 = {
  nome: "Vompiro",
  imagem: "https://pbs.twimg.com/media/FJ_L6XNXoAIjwog?format=jpg",
  atributos: {
    ataque: 3,
    defesa: 5,
    poder: 9
  }
};
var carta12 = {
  nome: "Alien X",
  imagem: "https://pbs.twimg.com/media/E3Kt5LOXwAISUfA?format=jpg",
  atributos: {
    ataque: 10,
    defesa: 10,
    poder: 10
  }
};

var carta13 = {
  nome: "Aquático",
  imagem: "https://pbs.twimg.com/media/E2sJkSmX0AUKWaf?format=jpg&name=900x900",
  atributos: {
    ataque: 3,
    defesa: 4,
    poder: 1
  }
};
var carta14 = {
  nome: "Gosma",
  imagem: "https://pbs.twimg.com/media/E2sF2QpWUAcYVca?format=jpg&name=900x900",
  atributos: {
    ataque: 4,
    defesa: 9,
    poder: 3
  }
};
var cartas = [
  carta1,
  carta2,
  carta3,
  carta4,
  carta5,
  carta6,
  carta7,
  carta8,
  carta9,
  carta10,
  carta11,
  carta12,
  carta13,
  carta14
];

var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 14);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 14);

  // while = enquanto
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 14);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  if (valorCartaJogador > valorCartaMaquina) {
    htmlResultado = "<p class='resultado-final'>Você venceu!</p>";
  } else if (valorCartaMaquina > valorCartaJogador) {
    htmlResultado = "<p class='resultado-final'>Você perdeu!</p>";
  } else {
    htmlResultado = "<p class= 'resultado-final'>Empatou</p>";
  }
  divResultado.innerHTML = htmlResultado;

  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  // divCartaJogador.style.backgroundImage="url(" + cartaJogador.imagem + ")"
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';

  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'checked>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;

  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';

  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";

  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p  name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}
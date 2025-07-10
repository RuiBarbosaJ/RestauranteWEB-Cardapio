const linksAll = document.querySelectorAll("header nav a");

// Para cada link, adiciona um evento de clique
linksAll.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // Tira o comportamento padrão da pagina

    // puxa o href do html.
    const alvoLINK = this.getAttribute("href"); // Pega o valor do href (ex: #sobre)
    const alvoID = document.querySelector(alvoLINK); // Seleciona a seção com esse ID

    if (alvoID) {
      alvoID.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Dados do cardápio
const cardapioData = {
  "bebidas-nao-alcoolicas": [
    {
      nome: "Coca-Cola",
      descricao:
        "Refrigerante tradicional gelado, perfeito para acompanhar suas refeições.",
      preco: "R$ 5,50",
      imagem:
        "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=300&h=200&fit=crop",
    },
    {
      nome: "Suco de Laranja",
      descricao: "Suco natural de laranja fresquinho, rico em vitamina C.",
      preco: "R$ 8,00",
      imagem:
        "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300&h=200&fit=crop",
    },
    {
      nome: "Água Mineral",
      descricao: "Água mineral sem gás, cristalina e refrescante.",
      preco: "R$ 3,50",
      imagem:
        "https://images.unsplash.com/photo-1550572017-aadb45c87daf?w=300&h=200&fit=crop",
    },
    {
      nome: "Limonada Suíça",
      descricao:
        "Limonada cremosa com leite condensado, uma delícia refrescante.",
      preco: "R$ 9,50",
      imagem:
        "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=300&h=200&fit=crop",
    },
    {
      nome: "Chá Gelado",
      descricao: "Chá gelado de pêssego com limão, refrescante e saboroso.",
      preco: "R$ 6,50",
      imagem:
        "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&h=200&fit=crop",
    },
    {
      nome: "Smoothie de Frutas",
      descricao: "Mix de frutas tropicais batidas com iogurte natural.",
      preco: "R$ 12,00",
      imagem:
        "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=300&h=200&fit=crop",
    },
  ],
  "bebidas-alcoolicas": [
    {
      nome: "Caipirinha",
      descricao:
        "Tradicional caipirinha brasileira com cachaça premium e limão.",
      preco: "R$ 15,00",
      imagem:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop",
    },
    {
      nome: "Cerveja Artesanal",
      descricao: "Cerveja artesanal IPA gelada, sabor único e marcante.",
      preco: "R$ 12,00",
      imagem:
        "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=300&h=200&fit=crop",
    },
    {
      nome: "Mojito",
      descricao: "Coquetel refrescante com rum, hortelã, limão e água com gás.",
      preco: "R$ 18,00",
      imagem:
        "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=300&h=200&fit=crop",
    },
    {
      nome: "Vinho Tinto",
      descricao: "Vinho tinto seco nacional, perfeito para acompanhar carnes.",
      preco: "R$ 25,00",
      imagem:
        "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300&h=200&fit=crop",
    },
    {
      nome: "Gin Tônica",
      descricao: "Gin premium com água tônica, limão siciliano e especiarias.",
      preco: "R$ 20,00",
      imagem:
        "https://images.unsplash.com/photo-1581546400131-baae56c82827?w=300&h=200&fit=crop",
    },
    {
      nome: "Whisky Nacional",
      descricao: "Whisky nacional envelhecido, servido puro ou com gelo.",
      preco: "R$ 22,00",
      imagem:
        "https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=300&h=200&fit=crop",
    },
  ],
  entradas: [
    {
      nome: "Bruschetta",
      descricao:
        "Fatias de pão italiano com tomate, manjericão e azeite extra virgem.",
      preco: "R$ 18,00",
      imagem:
        "https://images.unsplash.com/photo-1572441713132-5ccf4b1d1dcf?w=300&h=200&fit=crop",
    },
    {
      nome: "Coxinha da Casa",
      descricao:
        "Coxinha especial com frango desfiado e catupiry, massa crocante.",
      preco: "R$ 8,50",
      imagem:
        "https://images.unsplash.com/photo-1594212699475-c8ef0ba0f7f3?w=300&h=200&fit=crop",
    },
    {
      nome: "Tábua de Frios",
      descricao: "Seleção de queijos, frios, azeitonas e geleias artesanais.",
      preco: "R$ 35,00",
      imagem:
        "https://images.unsplash.com/photo-1546039907-7fa05f864c02?w=300&h=200&fit=crop",
    },
    {
      nome: "Pastéis Variados",
      descricao: "Trio de pastéis: carne, queijo e palmito, massa sequinha.",
      preco: "R$ 16,00",
      imagem:
        "https://images.unsplash.com/photo-1598515213692-bebe2d4dbfb0?w=300&h=200&fit=crop",
    },
    {
      nome: "Salada Caprese",
      descricao: "Mussarela de búfala, tomate italiano, manjericão e azeite.",
      preco: "R$ 22,00",
      imagem:
        "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=300&h=200&fit=crop",
    },
    {
      nome: "Bolinhos de Bacalhau",
      descricao:
        "Bolinhos tradicionais de bacalhau com batata, dourados e crocantes.",
      preco: "R$ 28,00",
      imagem:
        "https://images.unsplash.com/photo-1544025162-d76694265947?w=300&h=200&fit=crop",
    },
  ],
  pratos: [
    {
      nome: "Feijoada Completa",
      descricao:
        "Feijoada tradicional com linguiça, bacon, acompanha arroz e couve.",
      preco: "R$ 45,00",
      imagem:
        "https://images.unsplash.com/photo-1574484284002-952d92456975?w=300&h=200&fit=crop",
    },
    {
      nome: "Picanha Grelhada",
      descricao:
        "Picanha suculenta grelhada, acompanha arroz, feijão e batata frita.",
      preco: "R$ 55,00",
      imagem:
        "https://images.unsplash.com/photo-1544025162-d76694265947?w=300&h=200&fit=crop",
    },
    {
      nome: "Salmão Grelhado",
      descricao:
        "Filé de salmão grelhado com legumes no vapor e arroz integral.",
      preco: "R$ 48,00",
      imagem:
        "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=300&h=200&fit=crop",
    },
    {
      nome: "Lasanha Bolonhesa",
      descricao:
        "Lasanha caseira com molho bolonhesa e muito queijo gratinado.",
      preco: "R$ 38,00",
      imagem:
        "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=300&h=200&fit=crop",
    },
    {
      nome: "Frango à Parmegiana",
      descricao:
        "Filé de frango empanado com molho de tomate e queijo, com fritas.",
      preco: "R$ 42,00",
      imagem:
        "https://images.unsplash.com/photo-1598515213692-bebe2d4dbfb0?w=300&h=200&fit=crop",
    },
    {
      nome: "Risotto de Camarão",
      descricao:
        "Risotto cremoso com camarões grandes, finalizado com queijo parmesão.",
      preco: "R$ 52,00",
      imagem:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop",
    },
  ],
  sobremesas: [
    {
      nome: "Petit Gateau",
      descricao: "Bolinho de chocolate quente com sorvete de baunilha.",
      preco: "R$ 18,00",
      imagem:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=200&fit=crop",
    },
    {
      nome: "Tiramisu",
      descricao: "Tradicional sobremesa italiana com café, mascarpone e cacau.",
      preco: "R$ 16,00",
      imagem:
        "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=300&h=200&fit=crop",
    },
    {
      nome: "Pudim de Leite",
      descricao: "Pudim caseiro cremoso com calda de açúcar caramelizado.",
      preco: "R$ 12,00",
      imagem:
        "https://images.unsplash.com/photo-1551024506-0e0052f8abbe?w=300&h=200&fit=crop",
    },
    {
      nome: "Brownie com Sorvete",
      descricao: "Brownie de chocolate com nozes, acompanha sorvete de creme.",
      preco: "R$ 15,00",
      imagem:
        "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&h=200&fit=crop",
    },
    {
      nome: "Cheesecake de Frutas",
      descricao: "Cheesecake cremoso com calda de frutas vermelhas.",
      preco: "R$ 17,00",
      imagem:
        "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=300&h=200&fit=crop",
    },
    {
      nome: "Açaí com Granola",
      descricao: "Açaí cremoso com granola crocante, banana e mel.",
      preco: "R$ 14,00",
      imagem:
        "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=300&h=200&fit=crop",
    },
  ],
};

// Script para carregar o conteúdo dinâmico do cardápio
const btnCategoria = document.querySelectorAll(".btn-categoria");
const cardDinamico = document.querySelector("#conteudo-dinamico");

btnCategoria.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    const categoriaKey = this.dataset.categoria; // pega o valor do data-categoria
    const itensCategoria = cardapioData[categoriaKey];

    cardDinamico.innerHTML = ""; // Limpa o conteúdo anterior

    itensCategoria.forEach(function (item) {
      const card = document.createElement("div");
      card.classList.add("card-3");
      card.innerHTML = `
                    <img src="${item.imagem}" alt="${item.nome}">
                    <div class="card-content-3">
                        <h4><span>${item.nome}</span></h4>
                        <p>${item.descricao}</p>
                        <p class="preco">${item.preco}</p>
                    </div>
                `;
      cardDinamico.appendChild(card);
    });
  });
});

// Script para exibir a seção de contato
const NOME_INPUT = document.querySelector("#nome");
const EMAIL_INPUT = document.querySelector("#email");
const TELEFONE_INPUT = document.querySelector("#telefone");
const MENSAGEM_INPUT = document.querySelector("#mensagem");

const BTN_ENVIAR = document.querySelector("#btn-enviar");

BTN_ENVIAR.addEventListener("click", function (e) {
  e.preventDefault();
  validarInputs();
});

function validarInputs() {
  const nomeClient = NOME_INPUT.value.trim();
  const emailClient = EMAIL_INPUT.value.trim();
  const telefoneClient = TELEFONE_INPUT.value.trim();
  const mensagemClient = MENSAGEM_INPUT.value.trim();

  // Regex para validação
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const telefoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-\d{4}$/;

  if (nomeClient.length < 3) {
    alert("Nome deve ter pelo menos 3 caracteres");
    return false;
  }

  if (!emailRegex.test(emailClient)) {
    alert("Digite um e-mail válido.");
    return false;
  }

  if (!telefoneRegex.test(telefoneClient)) {
    alert("Digite um telefone no formato certo");
    return false;
  }

  if (mensagemClient.length < 5) {
    alert("Mensagem deve ter pelo menos 5 caracteres");
    return false;
  }

  return true;
}

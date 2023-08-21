const wineData = [
    {
      name: "Midnight Velvet",
      description: "Profundo e suave, como o próprio crepúsculo."
    },
    {
      name: "Whispering Oak",
      description: "Sussurros de carvalho em cada gole refinado."
    },
    {
      name: "Ruby Cascade",
      description: "Uma cascata de sabores vermelhos vívidos."
    },
    {
      name: "Enchanted Elixir",
      description: "Um elixir que encanta os sentidos delicadamente."
    },
    {
      name: "Velvet Serenade",
      description: "Um serenata aveludada de sabores inebriantes."
    },
    {
      name: "Amber Reverie",
      description: "Um devaneio âmbar de aromas sedutores."
    },
    {
      name: "Mystic Moonlight",
      description: "Sabores místicos sob a luz prateada noturna."
    },
    {
      name: "Azure Dreams",
      description: "Sonhos refrescantes em tons de azul profundo."
    },
    {
      name: "Golden Twilight",
      description: "Ouro líquido sob o céu crepuscular."
    },
    {
      name: "Crimson Whispers",
      description: "Sussurros rubi de paixão e encanto."
    },
    {
      name: "Opal Delight",
      description: "Delicadeza de opala em cada gota delicada."
    },
    {
      name: "Silk Harvest",
      description: "Colheita suave, como seda nos lábios."
    },
    {
      name: "Emerald Mist",
      description: "Um nevoeiro verdejante de aromas frescos."
    },
    {
      name: "Sun-Kissed Bliss",
      description: "Felicidade beijada pelo sol, em cada gole."
    },
    {
      name: "Velvet Ember",
      description: "Uma brasa aveludada de sabores ardentes."
    },
    {
      name: "Ocean Serenity",
      description: "Serenidade marinha em cada taça refrescante."
    },
    {
      name: "Twilight Harmony",
      description: "Harmonia crepuscular de notas delicadas dançantes."
    },
    {
      name: "Crimson Silk",
      description: "Suavidade rubi que envolve e seduz paladares."
    },
    {
      name: "Enchanted Oak",
      description: "Magia de carvalho em um gole mágico."
    },
    {
      name: "Velvet Lullaby",
      description: "Um embalo aveludado de notas suaves e tranquilas."
    }
  ];
  
  var catalogo = localStorage.getItem('catalogo'); 
  if (catalogo) {
      document.documentElement.innerHTML = catalogo;
    } else {
        var catLinha = document.querySelector('.cat-linha');
        var quantidade = Math.floor(Math.random() * 30) + 1;
        for (var i = 0; i < quantidade; i++) {
        var indiceSelecionado = Math.floor(Math.random() * wineData.length);
        var nomeSelecionado = wineData[indiceSelecionado].name;
        var descricaoSelecionada = wineData[indiceSelecionado].description;
        var preco = Math.floor(Math.random() * 100) + 30; 
        console.log(quantidade)
        var novoProduto = '<div class="produto">' +
                            '<img src="../assets/foto.png" alt="Foto do Vinho">' +
                            '<div>' +
                            '<div class="nome-vinho">' +
                            '<h2>' + nomeSelecionado +'</h2>' +
                            '<i><img src="../assets/corao-off.svg" alt=""></i>' +
                            '</div>' +
                            '<p class="preco">R$ ' + preco + ',00</p>' +
                            '<div class="descricao">' +
                            '<div class="separacao"></div>' +
                            '<p>' + descricaoSelecionada +'</p>' +
                            '</div>' +
                            '</div>';

        catLinha.innerHTML += novoProduto;
        wineData.splice(indiceSelecionado, 1); 
    }
    var html = document.documentElement.outerHTML;
    localStorage.setItem('catalogo', html); 
};

var selectedCount = 0;
quant = document.querySelector('.user h1')
produtoNome = document.querySelectorAll('.produto i')
produtoNome.forEach(produtoNome => {
    var selected = false; 
    produtoNome.addEventListener('click', function(){
        if (selected) {
          produtoNome.innerHTML = '<img src="../assets/corao-off.svg" alt="">';
          selected = false;
          selectedCount--; 
        } else {
          produtoNome.innerHTML = '<img src="../assets/corao-on.svg" alt="">';
            selected = true;
            selectedCount++; 
        }
        quant.innerHTML = selectedCount;
    });
});




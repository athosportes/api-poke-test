function retornarDadosApiPokemon() {
  fetch("https://pokeapi.co/api/v2/pokemon/charmander")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var informacaoDesejada = data.abilities[1].ability.name;
      console.log(informacaoDesejada);
      var nome = document.getElementById("divNome");
      nome.innerHTML = informacaoDesejada;
    });
}

retornarDadosApiPokemon()

  
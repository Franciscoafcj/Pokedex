

const pokeApi = {}

pokeApi.getPokemonDetails = (pokemon) => {
    return fetch(pokemon.url)
            .then((response) => response.json())
}

pokeApi.getpokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

   return fetch(url)
        .then( (response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetails))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((PokemonDetails) => PokemonDetails)

}


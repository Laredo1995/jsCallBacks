const loadPokemon = (_id, cb) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${_id}`)
        .then(res => res.json())
        .then(data => {
            cb(data)
        })
}
loadPokemon(30, (pokemon) => {
    console.log(pokemon);
})


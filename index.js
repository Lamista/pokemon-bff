const button = document.querySelector("button");
const name = document.querySelector("h2");
const img = document.querySelector("img");


function randomPokemon() {
    let randomNumber = Math.floor(Math.random() * 100);
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}/`)
        .then(response => response.json())
        .then(pokemon => {
            name.innerText = pokemon.forms[0].name[0].toUpperCase() + pokemon.forms[0].name.substring(1);
            img.src = pokemon.sprites.front_default;
        });
    img.alt = "pokemon image";
}

button.addEventListener("click", randomPokemon);

// componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//         .then(response => response.json())
//         .then(users => this.setState({ robots: users }));
// }
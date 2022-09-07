let pokeContainer = document.getElementById('poke_container');
const pokeNumber = 200;

const colors = {
	fire: '#FDDFDF',
	grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
};

const main_type = Object.keys(colors)

const fetchPokemon = async () =>{
    for(let i = 1; i<=pokeNumber;i++){
       await getPokemon(i)
    }
}

const getPokemon = async id =>{
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url);
    const pokeData = await res.json();
    createPokemonCard(pokeData);
}

fetchPokemon()

function createPokemonCard(pokeData){
    const pokeEl = document.createElement('div')
    pokeEl.classList.add("pokemon")
   
    const type = pokeData.types.map(el => el.type.name)
    const group = main_type.find(group => type.indexOf(group) >-1)
    const name = pokeData.name[0].toUpperCase() + pokeData.name.slice(1);
    const color = colors[group]
    

    const pokeHtml = ` 
    <div class="img-container">
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeData.id}.png" alt="">
    </div>
    <div class="info">
    <span class="number">#${pokeData.id.toString().padStart(3,"0")}</span>
    <h3 class="name">${name}</h3>
    <small class="type"> Type : <span>${type}</span></small>
    </div>
    ${name} `
    pokeEl.innerHTML = pokeHtml;
    pokeEl.style.backgroundColor = color;
    pokeContainer.appendChild(pokeEl);
}

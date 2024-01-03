let characters = [];
fetch("https://api.disneyapi.dev/character")
.then((res) => res.json())
.then((data) => {
    characters = data.data;
    console.log(characters); 
});

const renderCharacters = (char) => {
    
    let name = document.querySelector("#character-name")
    console.log(name)
    name.textContent = char.name
    
    let film = document.querySelector("#film")
    film.textContent = char.films
    
    let img = document.querySelector("#random-picture")
    img.src = char.imageUrl

    let show = document.querySelector("#show")
    show.textContent = char.tvShows

}

// const displayCharacetersFromButton = (char) => {

//     let column = document.getElementById('character-details')
//     column.innerHTML = ''

//     let name = document.getElementById('name')
//     name.textContent = char.name

//     const tvShowsButton = document.getElementById('character-TvShow');
//     tvShowsButton.addEventListener('click', filterByTVShows);

//     const filmsButton = document.getElementById('character-films');
//     filmsButton.addEventListener('click', filterByFilm);

//     // filterByTVShows(name)
//     // filterByFilm(name)
// }


let random = document.getElementById('random')

    
    random.addEventListener('click', () => {
        console.log(random)
        const randomIndex = Math.floor(Math.random() * characters.length);
        const randomCharacter = characters[randomIndex] 
        if(characters.length > 0) {
        console.log(randomCharacter) 
        }
        renderCharacters(randomCharacter)
    })

let form = document.getElementById("new-character");

form.addEventListener("submit", (e) => {
    e.preventDefault()

    let newCharacter = {
        name: e.target.name.value,
        imageUrl: e.target.image.value,
        films: e.target.films.value,
        shortFilms: e.target["short-films"].value,
        tvShows: e.target["tv-shows"].value,
        videoGames: e.target["video-games"].value,
    }

    renderCharacters(newCharacter);
})

const filterByFilm = () => {
    const charactersWithFilms = characters.filter((char) => char.films.length > 0);

    for(let character of charactersWithFilms) {
        renderCharacters(character)
    }
    
    console.log(charactersWithFilms);
  
}

const filterByTVShows = () => {
    const charactersWithTVShows = characters.filter((char) => char.tvShows.length > 0);

    console.log(charactersWithTVShows);
    
}

const filmsButton = document.getElementById('character-films');
filmsButton.addEventListener('click', filterByFilm);


const tvShowsButton = document.getElementById('character-TvShow');
tvShowsButton.addEventListener('click', filterByTVShows);






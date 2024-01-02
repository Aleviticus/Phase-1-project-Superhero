let characters = [];

fetch("https://api.disneyapi.dev/character")
    .then((res) => res.json())
    .then((data) => {
        characters = data.data;
        console.log(characters); 
    });

const renderCharacters = (char) => {
    
    let name = document.querySelector("#name")
    name.textContent = char.name
    
    let film = document.querySelector("#film")
    film.textContent = char.films
    
    let img = document.querySelector("#random-picture")
    img.src = char.imageUrl

    let show = document.querySelector("#show")
    show.textContent = char.shows

    }


    

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

let random = document.getElementById('random')

random.addEventListener('click', () => {
    if(characters.length > 0) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    const randomCharacter = characters[randomIndex] 
    console.log(randomCharacter) 
    }
})

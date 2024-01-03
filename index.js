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



let img = document.querySelector("#random-picture") 

img.addEventListener("mouseover", (e) => {
    e.preventDefault
    console.log('YAY')
    const imgUrl = img.src
    document.body.style.backgroundImage = `url(${imgUrl})`;
});

img.addEventListener("mouseout", (e) => {
    document.body.style.backgroundImage = 'none';
})

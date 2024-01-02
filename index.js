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
    const randomIndex = Math.floor(Math.random() * characters.length);
    const randomCharacter = characters[randomIndex] 
    if(characters.length > 0) {
    console.log(randomCharacter) 
    }
    renderCharacters(randomCharacter)
})





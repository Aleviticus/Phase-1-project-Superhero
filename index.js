let characters = [];
let activeArray = [] 
fetch("https://api.disneyapi.dev/character")
.then((res) => res.json())
.then((data) => {
    characters = data.data;
    activeArray = characters
    console.log(characters); 
    const randomIndex = Math.floor(Math.random() * activeArray.length);
    const randomCharacter =activeArray[randomIndex] 
    renderCharacters(randomCharacter)
});

const renderCharacters = (char) => {
    
    let name = document.querySelector("#character-name")
    console.log(name)
    name.textContent = char.name
    
    let film = document.querySelector("#film")
    film.textContent = "films: " + char.films
    
    let img = document.querySelector("#random-picture")
    img.src = char.imageUrl

    let show = document.querySelector("#show")
    show.textContent = "shows: " + char.tvShows

    let videoGames = document.getElementById('video-games')
    videoGames.textContent = char.videoGames

}


let random = document.getElementById('random')

    
    random.addEventListener('click', () => {
        console.log(random)
        const randomIndex = Math.floor(Math.random() * activeArray.length);
        const randomCharacter =activeArray[randomIndex] 
        if(activeArray.length > 0) {
        console.log(randomCharacter) 
        }
        renderCharacters(randomCharacter)
    })

let form = document.getElementById("new-character");


form.addEventListener("submit", (e) => {
    e.preventDefault()

    alert("Your Disney Character Has Been Created")


    let newCharacter = [{

        name: e.target.name.value,
        imageUrl: e.target.image.value,
        films: e.target.films.value,
        shortFilms: e.target["short-films"].value,
        tvShows: e.target["tv-shows"].value,
        videoGames: e.target["video-games"].value,
    }]

    characters = [...newCharacter, ...characters]
    console.log(characters)

    renderCharacters(newCharacter[0]);
})

const filterByFilm = () => {
    const charactersWithFilms = characters.filter((char) => char.films.length > 0);

    activeArray = charactersWithFilms

    for(let character of charactersWithFilms) {
        renderCharacters(character)
    }
    
    console.log(charactersWithFilms);
  
}

const filterByTVShows = () => {
    const charactersWithTVShows = characters.filter((char) => char.tvShows.length > 0);

    activeArray = charactersWithTVShows

    for(let character of charactersWithTVShows) {
        renderCharacters(character)
    }
    console.log(charactersWithTVShows);
    
}

const filterByVideoGams = () => {
    const charactersWithVideoGames = characters.filter((char) => char.videoGames.length > 0)

    activeArray = charactersWithVideoGames

    for(let videoGames of charactersWithVideoGames) {
        renderCharacters(videoGames)
    }
    console.log(charactersWithVideoGames)
}

const videoGames = document.getElementById('character-videogames')
videoGames.addEventListener('click', filterByVideoGams)

const filmsButton = document.getElementById('character-films');
filmsButton.addEventListener('click', filterByFilm);

const tvShowsButton = document.getElementById('character-TvShow');
tvShowsButton.addEventListener('click', filterByTVShows);

const resetButton = document.getElementById('reset-character')

resetButton.addEventListener("click", () => {
    activeArray = characters
})

let img = document.querySelector("#random-picture") 

img.addEventListener("mouseover", (e) => {
    e.preventDefault
    console.log('YAY')
    const imgUrl = img.src
    document.body.style.backgroundImage = `url(${imgUrl})`;
    document.body.style.color = 'white';
});

img.addEventListener("mouseout", (e) => {
    document.body.style.backgroundImage = "url('https://wallpapers.com/images/hd/disney-characters-and-magical-castle-wmu7s6xozw5bnyhk.jpg')";
})

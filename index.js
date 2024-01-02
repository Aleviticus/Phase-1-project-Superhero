
    fetch ("https://api.disneyapi.dev/character")
    .then((res) => res.json())
    .then ((data) => {
    console.log(data)
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

    renderCharacter(newCharacter);
})
fetch ("https://api.disneyapi.dev/character")
.then((res) => res.json())
.then ((data) => {
console.log(data.data)
})

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


    


let characters = [];

fetch("https://api.disneyapi.dev/character")
    .then((res) => res.json())
    .then((data) => {
        characters = data.data;
        console.log(characters); 
    });


let random = document.getElementById('random')

random.addEventListener('click', () => {
    if(characters.length > 0) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    const randomCharacter = characters[randomIndex] 
    console.log(randomCharacter) 
    }
})
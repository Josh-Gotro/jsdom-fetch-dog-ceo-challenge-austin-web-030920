console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let dogImages = []
let dogBreeds = []

document.addEventListener("DOMContentLoaded", (e) => {
    fetchDogs()
    fetchBreeds()

    document.getElementById("dog-breeds").addEventListener('click', (event) => {changeColor(event)})

    document.getElementById("breed-dropdown").addEventListener('change', (go) => {breedFilter(go)})



});

function fetchDogs() {
    fetch(imgUrl)
    .then(r=>r.json())
    .then(displayImages)
};

function displayImages(json) {
    dogImages = json.message;
    dogImages.forEach((image) => {
        let frame = document.getElementById("dog-image-container")
        dogDiv = document.createElement('div')
        let img = document.createElement('img')
        img.src = image
        dogDiv.appendChild(img)
        frame.appendChild(dogDiv)
    })
};

function fetchBreeds() {
    fetch(breedUrl)
    .then(r=>r.json())
    .then(addBreeds)
};

function displayBreeds(list) {
    breedsUl = document.getElementById("dog-breeds")
    breedsUl.innerHTML = "";

    list.forEach((breed) => {
        newLi = document.createElement('li')
        newLi.innerHTML = breed
        breedsUl.appendChild(newLi)
    });
};

function changeColor(event) {
    event.target.style.color = "#f542da"
};

function breedFilter(go){
    displayBreeds(dogBreeds.filter((e) => e.startsWith(go.target.value)))
};

function addBreeds() {
    let dogBreedsObj = json.message;
    dogBreeds = Object.keys(dogBreedsObj)
    displayBreeds(dogBreeds)
};
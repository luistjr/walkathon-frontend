/* DOM ELEMENTS */

const dogImage = document.querySelector("#dog-image")
const reservations = document.querySelector(".reservations")
const li = document.createElement("li")
const form = document.querySelector("#username-form")
const createAppointmentBtn = document.querySelector("#create-appointment-button")

/********************* David's doggo time ********************/

/* FETCH REQUEST VARIABLES */
const url = 'http://localhost:3000/api/v1/dogs'
const appointmentUrl = 'http://localhost:3000/api/v1/appointments'


/*Rendering Dogs */


fetch(url)
.then(response => response.json())
.then(dogArray => renderDogOptions(dogArray))


const dogCollection = document.querySelector('#dog-collection')


function renderAllDogs(dogArray) {
    dogArray.forEach((dog) => {
        renderOneDog(dog)
    })
}

fetch(url)
.then(response => response.json())
.then(dogArray => renderAllDogs(dogArray))


function renderOneDog(dogObj) {
    const div = document.createElement('div')
    const lis = dogObj.appointments.map(appointment => {
    return `<li>${appointment.date}</li>
    <li>${appointment.time}`
    })
    div.className = 'card'
    div.dataset.id = dogObj.id
    div.innerHTML = `
    <img src=${dogObj.img_url} class="dog-image" />
    <h2>${dogObj.name}</h2>
    <p>${dogObj.breed}</p>
    <p>${dogObj.comment}</p>
    ${lis.join("")}
    `

    dogCollection.append(div)

}



const updateCommentForm = document.querySelector('.update-dog-comment-form')

function renderDogOptions(dogs){
    const selectDogs = document.querySelector('#dogs')
    dogs.forEach((dog) => {
        const option = document.createElement('option')
        option.value = dog.id
        option.textContent = dog.name
        selectDogs.append(option)

    })
    
    
}

updateCommentForm.addEventListener('submit', event => {
    event.preventDefault()
    const inputText = document.querySelectorAll(".input-text")
    const comment = document.getElementsByName('comment')
    const commentValue = comment.item(1)
    
    const updateObj = {
        comment: commentValue.value 
        // id: dogObj.id
    }
    
    updateComment(updateObj)
    
})

const updateComment = (updatedObj) => {
    fetch(`http://localhost:3000/api/v1/dogs/74`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedObj)
    })
    .then(response => response.json())
    .then(updatedObj => renderOneDog(updatedObj))
}    



/* adding new dog */
let addDog = false;

const addDogBtn = document.querySelector('.submit')
const dogFormContainer = document.querySelector(".container")

addDogBtn.addEventListener("click", () => {
    addDog = !addDog;
    if (addDog) {
        dogFormContainer.style.display = "block";
    } else {
        dogFormContainer.style.display = "none";
    }
})

const newDogForm = document.querySelector('.add-dog-form')

newDogForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const dogName = event.target.name.value
    const dogBreed = event.target.breed.value
    const dogComment = event.target.comment.value
    const dogPicture = event.target.image.value
    
    const newDogObj = {
        name: dogName,
        breed: dogBreed,
        comment: dogComment,
        img_url: dogPicture
    }
    
    fetch('http://localhost:3000/api/v1/dogs', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newDogObj)
    })
    .then(response => response.json())
    .then(newDogObj => {
        renderOneDog(newDogObj)
    })
})


/********* Time for walkies **********/

fetch(url)
.then(r => r.json())
.then(dogArray => renderDogOptionsForIngredients(dogArray))

function renderDogOptionsForIngredients(dogs){
    const selectDogs2 = document.querySelector('#dogs-2')
    dogs.forEach((dog) => {
        const option = document.createElement('option')
        option.value = dog.id
        option.textContent = dog.name
        selectDogs2.append(option)

        
        const createAppointmentForm = document.querySelector('.create-appointment-form')
        
        createAppointmentForm.addEventListener("submit", event => {
            event.preventDefault()
            const appointmentDate = document.getElementsByName('date')
            const appointmentTime = document.getElementsByName('time')
            debugger
            const commentValue = comment.item(1)
    
            const updateObj = {
                comment: commentValue.value 
            
            }
        })
    
    })
}
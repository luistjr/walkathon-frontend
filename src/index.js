/* DOM ELEMENTS */

const dogImage = document.querySelector("#dog-image")
const reservations = document.querySelector(".reservations")
const li = document.createElement("li")
const form = document.querySelector("#username-form")
const createAppointmentBtn = document.querySelector("#create-appointment-button")
// const applicationForm = document.querySelector('#appointment-form')




/* CONDITIONAL 

if username matches username in database, then provide access to data

else prompt with create a user form 


/* RENDER FUNCTIONS */

// const renderUserDetails = userObj => {
//     // username.textContent = userObj.name
//     userObj.appointments
//     console.log(userObj.appointments[0].time)


/* FETCH FUNCTIONNS */

// const getOneUser = id => { 
//     fetch(`http://localhost:3000/api/v1/users/${id}`)
//         .then(r => r.json())
//         .then(userObj => {
//             renderUserDetails(userObj)
//         })
// }

/********************* David's doggo time ********************/

/* FETCH REQUEST VARIABLES */
const url = 'http:/localhost:3000/api/v1/dogs'


/*Rendering Dogs */


const dogCollection = document.querySelector('#dog-collection')

function renderOneDog(dogObj) {
    const div = document.createElement('div')
    div.className = 'card'
    div.dataset.id = dogObj.id
    div.innerHTML = `
    <img src=${dogObj.img_url} class="dog-image" />
    <h2>${dogObj.name}</h2>
    <p>${dogObj.breed}</p>
    <p>${dogObj.comment}</p>`
    
    dogCollection.append(div)
    
    
    function renderAllDogs(dogArray) {
        dogArray.forEach((dog) => {
            renderOneDog(dog)
        })
    }

    fetch(url)
    .then(response => response.json())
    .then(dogArray => renderAllDogs(dogArray))
}






/* adding new dog */
let addDog = false;

const addDogBtn = document.querySelector('#new-dog-btn')
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
    event.preventDefault
    const dogName = event.target.name.value
    const dogBreed = event.target.breed.value
    const dogComment = event.target.comment.value
    const dogPicture = event.target.img_url.value
    
    const newDogObj = {
        name: dogName,
        breed: dogBreed,
        comment: dogComment,
        img_url: dogPicture
    }
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(newDogObj)
    })
    .then(response => response.json())
    .then(newDogObj => {
        renderOneDog(newDogObj)
    })
})






/* ASYNC OPTIONN */

// const getOneUser = async (id) => {
    //     const url = `http://localhost:3000/api/v1/users/${id}`
    //     const response = await fetch(url)
    //     const userObj = await response.json()
    //     console.log(userObj)
    // }
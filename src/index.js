/* DOM ELEMENTS */

const dogImage = document.querySelector("#dog-image")
const username = document.querySelector(".div2")
const reservations = document.querySelector(".reservations")
const li = document.createElement("li")
const form = document.querySelector("#username-form")




/* Event Listeners */
form.addEventListener('submit', function(event){
    event.preventDefault()
    const username = event.target.username.value
    event.target.reset()
    console.log(username)
})

/* CONDITIONAL 

if username matches username in database, then provide access to data

else prompt with create a user form 


/* RENDER FUNCTIONS */

const renderUserDetails = userObj => {
    // username.textContent = userObj.name
    userObj.appointments
    console.log(userObj.appointments[0].time)
}

/* FETCH FUNCTIONNS */

const getOneUser = id => { 
    fetch(`http://localhost:3000/api/v1/users/${id}`)
        .then(r => r.json())
        .then(userObj => {
            renderUserDetails(userObj)
        })
}


/* fetch all dogs
get back response of dog objects
foreach on Dog Objs
for reach with Dogs Name 
append that to datalist 


/* Initialize Action */


/* ASYNC OPTIONN */

// const getOneUser = async (id) => {
//     const url = `http://localhost:3000/api/v1/users/${id}`
//     const response = await fetch(url)
//     const userObj = await response.json()
//     console.log(userObj)
// }
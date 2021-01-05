/* DOM ELEMENTS */

const dogImage = document.querySelector("#dog-image")
const username = document.querySelector(".div2")
const reservations = document.querySelector(".reservations")
const li = document.createElement("li")


/* RENDER FUNCTIONS */

const renderUserDetails = userObj => {
    username.textContent = userObj.name
    console.log(userObj.name)
}

/* FETCH FUNCTIONNS */

const getOneUser = id => { 
    fetch(`http://localhost:3000/api/v1/users/${id}`)
        .then(r => r.json())
        .then(userObj => {
            renderUserDetails(userObj)
        })
}

/* Initialize Action */
getOneUser(1)


/* ASYNC OPTIONN */

// const getOneUser = async (id) => {
//     const url = `http://localhost:3000/api/v1/users/${id}`
//     const response = await fetch(url)
//     const userObj = await response.json()
//     console.log(userObj)
// }
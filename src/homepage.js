import { getUserName } from "./main"
//loading user-name on the homepage 
document.addEventListener('DOMContentLoaded', () => {
    let getName = window.localStorage.getItem('name', getUserName)
    let displayName = document.querySelector('#user-name');
    displayName.innerHTML = getName.toUpperCase()
})

// // fixed bottom-0 right-0 left-0 z-20 bg-gray-100

// let scroll = document.body.addEventListener('scroll', () => {
//     document.querySelector("#footer").classList.add('fixed bottom-0 right-0 left-0 z-20 bg-gray-100')
// })
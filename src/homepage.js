import { getUserName } from "./main"
//loading user-name on the homepage 
document.addEventListener('DOMContentLoaded', () => {
    let getName = window.localStorage.getItem('name', getUserName)
    let displayName = document.querySelector('#user-name');
    displayName.innerHTML = getName.toUpperCase()
})


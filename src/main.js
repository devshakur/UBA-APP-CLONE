import "./styles/style.css";
import countryInfo from "./data/data";

const fingerPrints = () => { 
document.querySelector('.finger').addEventListener('click', (e) => {
    e.preventDefault();
    alert('No registered FingerPrint')
})
}
document.addEventListener("DOMContentLoaded", () => {
    displayCountry();
    openCountryNav();
    // redirectHome('#sign-up', "homePage.html");
    signInAuthorization();
    clearError();
    redirectHome('#criteria', 'signUp.html');
    openBar('#open-msg');
    closeBar('#close-msg');
    showSignInPage();
    closeSignPage();
    getUserName();
    fingerPrints()
    loadCountryFlag()
    // closeCountryNav();
})
//Global Variables
let container = document.querySelector(".box");
let openAccounts = document.querySelector('#open-account');
let errorMsg = document.querySelector('#error');
let inputValue = document.querySelector('#password');

// loading countrys name for user to pick

const loadCountryFlag = () => {
    const flagContainer = document.querySelector('.flag-container')
    let countrysName = document.querySelector(".country-name");
     let openBtn = document.querySelector(".opens");
    countrysName.addEventListener('change', () => {
        flagContainer.classList.remove('hidden');
        const selectedIndex = countrysName.selectedIndex;
        if (selectedIndex === 1) {
            flagContainer.src = './data/flags/Nigeria.png'
        } else if (selectedIndex === 2) {
             flagContainer.src = './data/ghana-removebg-preview.png'
        } else if (selectedIndex === 3) {
             flagContainer.src = './data/flags/bostwana-removebg-preview.png'
        } else if (selectedIndex === 4) {
             flagContainer.src = './data/flags/guinea-republic.png'
        } else if (selectedIndex === 5) {
              flagContainer.src = './data/flags/benin.png'
        } else if (selectedIndex === 6) {
               flagContainer.src = './data/flags/burkina-faso.png'
        } else if (selectedIndex === 7) {
             flagContainer.src = './data/flags/Congo-Drc.png'
        } else if (selectedIndex === 8) {
            flagContainer.src = './data/flags/cote-dvoire.png'
        } else {
            null
        }
})
}


let displayCountry = () => {
    countryInfo.map((item) => {
        let optionContainer = document.querySelector("#countrys");
        let countryImage = document.querySelector(".country-image");  
        const options = document.createElement('option');
        options.className = 'text-[10px] md:text-[12px] hover:bg-blue-300'
        options.innerHTML = `${item.name}`
        optionContainer.append(options);
         countryImage.src = `${item.img}`
        
    })
}

const openCountryNav = (id) => {
    let btnNav = document.querySelector('#open-country');
    btnNav.addEventListener('click', (e) => {
        e.stopImmediatePropagation();
        if (container.classList.contains('hidden')) {
            container.classList.remove('hidden')
        } else {
            null
        }
    })
}
//this code still on progress
const closeCountryNav = () => {
    let btnClose = dynamicText.querySelector(".btn");
    btnClose.addEventListener('click', (e) => {
        e.stopImmediatePropagation();
        if (!container.classList.contains('hidden')) {
            container.classList.add('hidden')
        }
    })
}

let redirectHome = (id, location) => {
    let signUpBtn = document.querySelector(id);
    signUpBtn.addEventListener('click', (e) => {
        e.stopImmediatePropagation();
        document.location.href = location;
    })
}

let signInAuthorization = () => {
    let signUpBtn = document.querySelector('#sign-up');
    signUpBtn.addEventListener('click', (e) => {
        e.stopImmediatePropagation();
        e.preventDefault();
        if (inputValue.value === '') {
            errorMsg.innerHTML = 'please enter your password';
        } else if (inputValue) {
            document.location.href = 'homePage.html';
        }
    })
}

let clearError = () => {
    let pswd = document.querySelector('.pswd');
    pswd.addEventListener('keyup', () => {
        if (!errorMsg.classList.contains('hidden')) {
            errorMsg.classList.add('hidden');
        } else if (inputValue.value === '') {
            errorMsg.classList.remove('hidden')
        }
    })
}

let openBar = (id) => {
    let openMsg = document.querySelector(id);
    openMsg.addEventListener('click', (e) => {
        e.stopImmediatePropagation();
        if (openAccounts.classList.contains('hidden')) {
            openAccounts.classList.remove('hidden')
        }
    })
}

let closeBar = (id) => {
    let closeMsg = document.querySelector(id);
    closeMsg.addEventListener('click', () => {
        if (!openAccounts.classList.contains('hidden')) {
            openAccounts.classList.add('hidden')
        }
    })
}


let showSignInPage = () => {
    const signBtn = document.querySelector('#show-signInBtn');
    const signPage = document.querySelector('#show-signIn');
    const headerOpac = document.querySelector('#main');
    const frontOpac = document.querySelector('#front-page');
    signBtn.addEventListener('click', () => {
        if (signPage.classList.contains('hidden')) {
            signPage.classList.remove('hidden');
            headerOpac.classList.add('opacity-40');
            frontOpac.classList.add('opacity-40');
        }
    })
}

let closeSignPage = () => {
    const signBtn = document.querySelector('#close-signIn');
    const signPage = document.querySelector('#show-signIn');
    const headerOpac = document.querySelector('#main');
    const frontOpac = document.querySelector('#front-page');
    signBtn.addEventListener('click', () => {
        if (!signPage.classList.contains('hidden')) {
            signPage.classList.add('hidden');
            headerOpac.classList.remove('opacity-40');
            frontOpac.classList.remove('opacity-40');
            
        }
    })
}
// getting user-name doing signup
export let getUserName = () => {
  let input = document.querySelector('.values');
input.addEventListener('blur', () => {
    let userName = input.value;
    window.localStorage.setItem('name', userName)
})   
 }


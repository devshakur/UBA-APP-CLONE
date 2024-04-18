import "./style.css";


document.addEventListener("DOMContentLoaded", () => {
    countryName();
    openCountryNav();
    // redirectHome('#sign-up', "homePage.html");
    signInAuthorization();
    clearError();
    redirectHome('#criteria', 'signUp.html');
    openBar('#open-msg');
    closeBar('#close-msg');
    showSignInPage();
    closeSignPage();
    // closeCountryNav();
})
//Global Variables
let container = document.querySelector(".box");
let openAccounts = document.querySelector('#open-account');
let errorMsg = document.querySelector('#error');
let inputValue = document.querySelector('#password');

const countryName = async () => {
    let list = document.querySelector("#countrys");
    let generatedText = '';
    let text = '<div class="btn flex justify-end">❌</div>';
    const apiCall = await fetch('https://restcountries.com/v3.1/region/africa');
    let result = await apiCall.json();
    //    const [{ name: { official } }] = result; 
    const officialNames = result.map(({
        name: {
            official
        }
    }) => official)
    for (let item of officialNames) {
        generatedText += `<li class="hover:bg-green-500">${item}</li>`
    }
    list.innerHTML = text + generatedText;
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

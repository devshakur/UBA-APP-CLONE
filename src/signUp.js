let back_to_sign_up = () => {
    let backBtn = document.querySelector('#beck-btn'); 
    backBtn.addEventListener('click', () => {
        console.log('clicked');
        window.history.back();
    })
}
back_to_sign_up();


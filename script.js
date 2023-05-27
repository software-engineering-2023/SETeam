const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
})

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
})

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
})

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
})

const wrapper2 = document.querySelector('.wrapper2');
const btnPopup2 = document.querySelector('.staff-popup');
const iconClose2 = document.querySelector('.icon-close2');

btnPopup2.addEventListener('click', () => {
    wrapper2.classList.add('active-popup');
})

iconClose2.addEventListener('click', () => {
    wrapper2.classList.remove('active-popup');
})

let accounts = []

const register = () => {
    //get value from input
    let passElement = document.getElementById('pass')
    const passVal = passElement.value

    let emailElement = document.getElementById('email')
    const emailVal = emailElement.value

    let nationalIDElement = document.getElementById('NID')
    const nationalIDVal = nationalIDElement.value

    let phoneNumElement = document.getElementById('PN')
    const phoneNumVal = phoneNumElement.value

    let BDayElement = document.getElementById('BD')
    const BDayVal = BDayElement.value

    let cityElement = document.getElementById('city')
    const cityVal = cityElement.value


    //save value in json object and console log it
    const account = {
        email: emailVal,
        password: passVal,
        nationalID: nationalIDVal,
        phoneNum: phoneNumVal,
        birthdate: BDayVal,
        city: cityVal
    }
    let unique = true;
    for (let i = 0; i < accounts.length; i++) {
        if (accounts[i].email == emailVal || accounts[i].nationalID == nationalIDVal) {
            unique = false;
        }
    }
    // if (emailVal == "") {
    //     unique = false;
    //     alert('Please type your email')
    // }
    // if (passVal == "") {
    //     unique = false;
    //     alert('Please choose a password')
    // }
    // if (nationalIDVal == null) {
    //     unique = false;
    //     alert('Please type your national ID')
    // }
    // if (phoneNumVal == null) {
    //     unique = false;
    //     alert('Please type your phone number')
    // }
    // if (BDayVal == null) {
    //     unique = false;
    //     alert('Please choose your birth date')
    // }
    // if (cityVal == null) {
    //     unique = false;
    //     alert('Please choose the city you live in')
    // }
    if (unique == true) {
        accounts = [...accounts, account]
        console.log(passVal)
        localStorage.setItem('accounts', JSON.stringify(accounts))
        
    }
    else {
        alert('This email or national ID is already in use ')
    }
}


const login = () => {
    let passElement = document.getElementById('Login-password')
    const passVal = passElement.value
    let emailElement = document.getElementById('Login-email')
    const emailVal = emailElement.value

    let validLogin = false;
    const accounts = JSON.parse(localStorage.getItem('accounts'))
    for (let i = 0; i < accounts.length; i++) {
        if (accounts[i].password == passVal && accounts[i].email == emailVal) {
            validLogin = true;
        }
    }
    if (validLogin == true) {
        window.location = "./Page2.html"
    }
    else {
        alert('Wrong email or password')
    }
}

const servicesMain = () => {
    window.location = "./Services(main).html"
}   
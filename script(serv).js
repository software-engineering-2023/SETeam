const wrapper = document.querySelector('.wrapper');
const btnPopup = document.querySelector('.btn');
const iconClose = document.querySelector('.icon-close');

btnPopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
})

iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
})

const wrapper2 = document.querySelector('.wrapper2');
const btnPopup2 = document.querySelector('.btn2');
const iconClose2 = document.querySelector('.icon-close2');

btnPopup2.addEventListener('click',()=>{
    wrapper2.classList.add('active-popup');
})

iconClose2.addEventListener('click',()=>{
    wrapper2.classList.remove('active-popup');
})

const wrapper8 = document.querySelector('.wrapper8');
const btnPopup8 = document.querySelector('.btn8');
const iconClose8 = document.querySelector('.icon-close8');
const diffBankLink = document.querySelector('.diff-bank');
const sameBankLink = document.querySelector('.same-bank');

btnPopup8.addEventListener('click',()=>{
    wrapper8.classList.add('active-popup');
})

diffBankLink.addEventListener('click',()=>{
    wrapper8.classList.add('active');
})

sameBankLink.addEventListener('click',()=>{
    wrapper8.classList.remove('active');
})

iconClose8.addEventListener('click',()=>{
    wrapper8.classList.remove('active-popup');
})

const goHomeLogin = () => {
    window.location = "./Page2.html" 
}   

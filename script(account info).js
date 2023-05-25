const wrapper2 = document.querySelector('.wrapper2');
const notifPopup = document.querySelector('.notifications-popup');
const iconClose2 = document.querySelector('.icon-close2');
const reminder = document.querySelector('.reminders-link');
const cancelReminder = document.querySelector('.cancelCreate');

notifPopup.addEventListener('click',()=>{
    wrapper2.classList.add('active-popup');
})

iconClose2.addEventListener('click',()=>{
    wrapper2.classList.remove('active-popup');
})

reminder.addEventListener('click',()=>{
    wrapper2.classList.add('active');
})

cancelReminder.addEventListener('click',()=>{
    wrapper2.classList.remove('active');
})

const goHomeLogin = () => {
    window.location = "./Page2.html" 
}   

const goServLogin = () => {
    window.location = "./Services.html" 
} 


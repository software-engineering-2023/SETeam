const goHomeLogin = () => {
  window.location = "./page2.html";
};

const goServMain = () => {
  window.location = "./Services.html";
};

const goContact = () => {
  window.location = "./contactLogin.html";
};

const wrapper2 = document.querySelector(".wrapper2");
const btnPopup = document.querySelector(".btn");
const iconClose = document.querySelector(".icon-close");

btnPopup.addEventListener("click", () => {
  wrapper2.classList.add("active-popup");
});

iconClose.addEventListener("click", () => {
  wrapper2.classList.remove("active-popup");
});

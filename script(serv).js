const wrapper = document.querySelector(".wrapper");
const btnPopup = document.querySelector(".btn");
const iconClose = document.querySelector(".icon-close");

btnPopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

iconClose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});

const wrapper2 = document.querySelector(".wrapper2");
const btnPopup2 = document.querySelector(".btn2");
const iconClose2 = document.querySelector(".icon-close2");

btnPopup2.addEventListener("click", () => {
  wrapper2.classList.add("active-popup");
});

iconClose2.addEventListener("click", () => {
  wrapper2.classList.remove("active-popup");
});

const wrapper8 = document.querySelector(".wrapper8");
const btnPopup8 = document.querySelector(".btn8");
const iconClose8 = document.querySelector(".icon-close8");
const diffBankLink = document.querySelector(".diff-bank");
const sameBankLink = document.querySelector(".same-bank");

btnPopup8.addEventListener("click", () => {
  wrapper8.classList.add("active-popup");
});

diffBankLink.addEventListener("click", () => {
  wrapper8.classList.add("active");
});

sameBankLink.addEventListener("click", () => {
  wrapper8.classList.remove("active");
});

iconClose8.addEventListener("click", () => {
  wrapper8.classList.remove("active-popup");
});

const goHomeLogin = () => {
  window.location = "./Page2.html";
};
const wrapper10 = document.querySelector(".wrapper10");
const btnPopup10 = document.querySelector(".btn10");
const iconClose10 = document.querySelector(".icon-close10");
const wrapper100 = document.querySelector(".wrapper100");
const btnPopup100 = document.querySelector(".btn100");
const iconClose100 = document.querySelector(".icon-close100");

btnPopup10.addEventListener("click", () => {
  wrapper10.classList.add("active-popup");
});

iconClose10.addEventListener("click", () => {
  wrapper10.classList.remove("active-popup");
});

btnPopup100.addEventListener("click", () => {
  wrapper100.classList.add("active-popup");
});

iconClose100.addEventListener("click", () => {
  wrapper100.classList.remove("active-popup");
});

const wrapper6 = document.querySelector(".wrapper6");
const btnPopup6 = document.querySelector(".btn6");
const iconClose6 = document.querySelector(".icon-close6");
const wrapper60 = document.querySelector(".wrapper60");
const btnPopup60 = document.querySelector(".btn60");
const iconClose60 = document.querySelector(".icon-close60");

btnPopup6.addEventListener("click", () => {
  wrapper6.classList.add("active-popup");
});

iconClose6.addEventListener("click", () => {
  wrapper6.classList.remove("active-popup");
});

btnPopup60.addEventListener("click", () => {
  wrapper60.classList.add("active-popup");
});

iconClose60.addEventListener("click", () => {
  wrapper60.classList.remove("active-popup");
});

const wrapper7 = document.querySelector(".wrapper7");
const wrapper70 = document.querySelector(".wrapper70");

const btnPopup7 = document.querySelector(".btn7");
const iconClose7 = document.querySelector(".icon-close7");

const btnPopup70 = document.querySelector(".btn70");
const iconClose70 = document.querySelector(".icon-close70");

btnPopup7.addEventListener("click", () => {
  wrapper7.classList.add("active-popup");
});

iconClose7.addEventListener("click", () => {
  wrapper7.classList.remove("active-popup");
});

btnPopup70.addEventListener("click", () => {
  wrapper70.classList.add("active-popup");
});

iconClose70.addEventListener("click", () => {
  wrapper70.classList.remove("active-popup");
});
const wrapper9 = document.querySelector(".wrapper9");
const btnPopup9 = document.querySelector(".btn9");
const iconClose9 = document.querySelector(".icon-close9");

btnPopup9.addEventListener("click", () => {
  wrapper9.classList.add("active-popup");
});

iconClose9.addEventListener("click", () => {
  wrapper9.classList.remove("active-popup");
});

const contactLogin = () => {
  window.location = "./contactLogin.html";
};

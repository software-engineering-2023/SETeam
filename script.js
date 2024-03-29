const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icon-close");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

btnPopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

iconClose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});

const wrapper2 = document.querySelector(".wrapper2");
const btnPopup2 = document.querySelector(".staff-popup");
const iconClose2 = document.querySelector(".icon-close2");

btnPopup2.addEventListener("click", () => {
  wrapper2.classList.add("active-popup");
});

iconClose2.addEventListener("click", () => {
  wrapper2.classList.remove("active-popup");
});

let accounts = [];

const register = () => {
  //get value from input
  let passElement = document.getElementById("pass");
  const passVal = passElement.value;

  let emailElement = document.getElementById("email");
  const emailVal = emailElement.value;

  let nationalIDElement = document.getElementById("NID");
  const nationalIDVal = nationalIDElement.value;

  let phoneNumElement = document.getElementById("PN");
  const phoneNumVal = phoneNumElement.value;

  let BDayElement = document.getElementById("BD");
  const BDayVal = BDayElement.value;

  let cityElement = document.getElementById("city");
  const cityVal = cityElement.value;

  //save value in json object and console log it
  const account = {
    email: emailVal,
    password: passVal,
    nationalID: nationalIDVal,
    phoneNum: phoneNumVal,
    birthdate: BDayVal,
    city: cityVal,
  };
  let unique = true;
  for (let i = 0; i < accounts.length; i++) {
    if (
      accounts[i].email == emailVal ||
      accounts[i].nationalID == nationalIDVal
    ) {
      unique = false;
    }
  }

  if (unique == true) {
    accounts = [...accounts, account];
    console.log(passVal);
    localStorage.setItem("accounts", JSON.stringify(accounts));
  } else {
    alert("This email or national ID is already in use ");
  }
};

const login = () => {
  let passElement = document.getElementById("Login-password");
  const passVal = passElement.value;
  let emailElement = document.getElementById("Login-email");
  const emailVal = emailElement.value;
  console.log("a7a");
  let validLogin = false;
  const accounts = JSON.parse(localStorage.getItem("accounts"));
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i].password == passVal && accounts[i].email == emailVal) {
      validLogin = true;
    }
  }
  if (emailVal == "admin@gmail.com" && passVal == "admin") {
    window.location = "./Admin.html";
  } else if (emailVal == "banker@gmail.com" && passVal == "banker") {
    window.location = "./bankerPage.html";
  } else if (emailVal == "client@gmail.com" && passVal == "client") {
    window.location = "./Page2.html";
  } else if (validLogin == true) {
    window.location = "./Page2.html";
  } else {
    alert("Wrong email or password");
  }
};

const servicesMain = () => {
  window.location = "./Services(main).html";
};

const contactMain = () => {
  window.location = "./contactUs.html";
};
function changeIconx(green, red) {
  green.disabled = true;
  red.style.display = "none";
}
function changeIcony(green, red) {
  green.style.display = "none";
  red.disabled = true;
}

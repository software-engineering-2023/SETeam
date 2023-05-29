const wrapper = document.querySelector(".wrapper");
const deleteLink = document.querySelector(".delete-link");
const accPopup = document.querySelector(".Account-popup");
const iconClose = document.querySelector(".icon-close");
const canceldel = document.querySelector(".Cancel");

deleteLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

canceldel.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

accPopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

iconClose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});

const wrapper2 = document.querySelector(".wrapper2");
const notifPopup = document.querySelector(".notifications-popup");
const iconClose2 = document.querySelector(".icon-close2");
const reminder = document.querySelector(".reminders-link");
const cancelReminder = document.querySelector(".cancelCreate");

notifPopup.addEventListener("click", () => {
  wrapper2.classList.add("active-popup");
});

iconClose2.addEventListener("click", () => {
  wrapper2.classList.remove("active-popup");
});

reminder.addEventListener("click", () => {
  wrapper2.classList.add("active");
});

cancelReminder.addEventListener("click", () => {
  wrapper2.classList.remove("active");
});

const goServLogin = () => {
  window.location = "./Services.html";
};

const goAccInfo = () => {
  window.location = "./accountInfo.html";
};

const signOut = () => {
  window.location = "./main.html";
};

const contactLogin = () => {
  window.location = "./contactLogin.html";
};
const report = () => {
  window.location = "./Report.html";
};

const chat = document.querySelector(".chat");
const profile = document.querySelector(".user-profile");

/* ===================================
    Screen resize handler
====================================== */
const smallDevice = window.matchMedia("(max-width: 767px)");
const largeScreen = window.matchMedia("(max-width: 1199px)");
smallDevice.addEventListener("change", handleDeviceChange);
largeScreen.addEventListener("change", handleLargeScreenChange);

handleDeviceChange(smallDevice);
handleLargeScreenChange(largeScreen);

function handleDeviceChange(e) {
  if (e.matches) chatMobile();
  else chatDesktop();
}

function handleLargeScreenChange(e) {
  if (e.matches) profileToogleOnLarge();
  else profileExtraLarge();
}

function chatMobile() {
  chat.classList.add("chat--mobile");
}

function chatDesktop() {
  chat.classList.remove("chat--mobile");
}

function profileToogleOnLarge() {
  profile.classList.add("user-profile--large");
}

function profileExtraLarge() {
  profile.classList.remove("user-profile--large");
}

/* ===================================
    Events
====================================== */
document.querySelector(".messaging-member").addEventListener("click", function () {
  chat.style.display = "block";
  chat.classList.add("chat--show");
});

document.querySelector(".chat__previous").addEventListener("click", function () {
  chat.classList.remove("chat--show");
});

document.querySelector(".chat__details").addEventListener("click", function () {
  profile.style.display = "block";
  profile.classList.add("user-profile--show");
});

document.querySelector(".user-profile__close").addEventListener("click", function () {
  profile.classList.remove("user-profile--show");
});

document.querySelector(".messages-page__dark-mode-toogler").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

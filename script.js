let navbar = document.querySelector(".header .flex .navbar");
let account = document.querySelector(".user-account");
let myOrders = document.querySelector(".my-orders");

// menu navbar burger button.
document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};

// login & register button function
document.querySelector("#user-btn").onclick = () => {
  account.classList.toggle("active");
};

// login & register button close functionality.
document.querySelector("#close-account").onclick = () => {
  account.classList.remove("active");
};

// Previous orders list display.
document.querySelector("#order-btn").onclick = () => {
  myOrders.classList.toggle("active");
};

// Order display hidden
document.querySelector("#close-orders").onclick = () => {
  myOrders.classList.remove("active");
};

document.window.onscroll = () => {
  navbar.classList.remove("active");
};

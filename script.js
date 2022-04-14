const navbar = document.querySelector(".header .flex .navbar");
const account = document.querySelector(".user-account");
const myOrders = document.querySelector(".my-orders");
const cart = document.querySelector(".shopping-cart");

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

// cart open on cart-btn in navbar
document.querySelector("#cart-btn").onclick = () => {
  cart.classList.toggle("active");
};

// cart hidden function.
document.querySelector("#close-cart").onclick = () => {
  cart.classList.remove("active");
};

document.window.onscroll = () => {
  navbar.classList.remove("active");
  myOrders.classList.remove("active");
  cart.classList.remove("active");
};

var bars = document.getElementById("home-header-nav-icon");
var ul = document.getElementById("ul");
var close = document.getElementById("home-header-nav-ulicon");
var li = document.querySelectorAll("li");

// ul.classList.add("open");

bars.onclick = function width1() {
    ul.style.left = "0px";
    ul.style.transition = "left 1s";
};

function close1() {
    ul.style.left = "-1000px";
    ul.style.transition = "left 2s";
};
console.log(ul)
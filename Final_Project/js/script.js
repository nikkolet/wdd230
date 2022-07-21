//Date
const d = new Date();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const month = d.getMonth();
newmonth = months[month];

let day = d.getDate();

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let dayofweek = weekday[d.getDay()];

const year = d.getFullYear();

// document.querySelector(".date").textContent = dayofweek + ", " + day + "  " + newmonth + " " + year;
document.querySelector("#lastmodified").textContent = document.lastModified;
document.querySelector("#year").textContent = year;


//Hamburger Menu
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn');

x.onclick = toggleMenu;
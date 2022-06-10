//Date
const d = new Date();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const month = d.getMonth();
newmonth = months[month];

let day = d.getDate();

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let dayofweek = weekday[d.getDay()];

const year = d.getFullYear();

document.querySelector("#date").innerHTML = dayofweek + ", " + day + "  " + newmonth + " " + year

//Message
if (dayofweek == "Monday") {
    document.querySelector("#message").innerHTML = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m."
} else if (dayofweek == "Tuesday") {
    document.querySelector("#message").innerHTML = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m."
} else {
    document.querySelector("#message").innerHTML = "No Messages today."
}


//Hamburger Menu
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn');

x.onclick = toggleMenu;
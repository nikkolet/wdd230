const date = Date.now()

const lastdate = localStorage.getItem("lastvisited")
let datecalc = ((date - lastdate) / 86400000).toFixed(0);
let visit;
if (!lastdate) {
    visit = "Welcome to your first visit!";
} else {
    visit = `Welcome! It has been ${datecalc} days since you've visited!`
}

const lastvisited = document.querySelector("#lastvisited");
lastvisited.textContent = visit;

localStorage.setItem("lastvisited", date);
function calculateWindChill() {
    var temp = document.getElementById("temp").value;
    var wSpeed = document.getElementById("windSpeed").value;
    if ((temp <= 50) && (wSpeed > 3)) {

        var windChill = (35.74 + (0.6215 * temp)) - (35.75 * Math.pow(wSpeed, 0.16)) + (0.4275 * temp * Math.pow(wSpeed, 0.16));


        windChill = Math.round(windChill);
        document.getElementById("windChill").innerHTML = windChill;
    } else {
        document.getElementById("windChill").innerHTML = "N/A";
    }
}

document.querySelector('#button').onclick = calculateWindChill;
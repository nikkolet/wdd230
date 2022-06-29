function calculateWindChill() {
    var temp = document.getElementById("current-temp").value;
    var wSpeed = document.getElementById("windspeed").value;
    if ((temp <= 50) && (wSpeed > 3)) {

        var windChill = (35.74 + (0.6215 * temp)) - (35.75 * Math.pow(wSpeed, 0.16)) + (0.4275 * temp * Math.pow(wSpeed, 0.16));


        windChill = Math.round(windChill);
        document.getElementById("windchill").innerHTML = windChill + "°f";
    } else {
        document.getElementById("windchill").innerHTML = "N/A";
    }
}
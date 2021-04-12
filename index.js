setInterval(function klok(){

    var d = new Date();
    var e = new Date();


    if (d.getHours() <= 9) {
        document.getElementById("uurKlok").innerHTML = "0" + d.getHours();
    }
    else {
        document.getElementById("uurKlok").innerHTML = d.getHours();
    }
    if (e.getMinutes() <= 9) {
        document.getElementById("minuutKlok").innerHTML = "0" + e.getMinutes();
    }
    else {
        document.getElementById("minuutKlok").innerHTML = e.getMinutes();
    }
    if (e.getSeconds() <= 9) {
        document.getElementById("secondenKlok").innerHTML = "0" + e.getSeconds();
    }
    else {
        document.getElementById("secondenKlok").innerHTML = e.getSeconds();
    }    
}, 0);
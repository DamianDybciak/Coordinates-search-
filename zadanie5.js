"use strict";


let btn = document.getElementById("btn");
let miasto = document.getElementById("miasto");

let output = document.getElementById("wyjscie");

btn.addEventListener("click",function(){
    let lokalizcja = miasto.value;
    let adres = `https://nominatim.openstreetmap.org/search.php?q=${lokalizcja}&format=json&limit=1`;
    let http = new XMLHttpRequest();
    http.open("GET", adres);

    http.send();
    http.responseType = "json";


    http.addEventListener("load", function(){
        if(http.status===200 && http.response){
            let odpowiedz = http.response[0];
            if (odpowiedz){
                let lon = odpowiedz.lon;
                let lat = odpowiedz.lat;
                
                output.innerText= `Szerokość: ${lat}  Długość: ${lon} `;
            }else{
                output.innerText = "Błąd";
            }
        }else{
            output.innerText = "Błąd";
        }
    });


});
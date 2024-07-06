                                                                                                                        //Kommentit omaksi iloksi ja muille avuksi :-)
let muunnos_valinta, syote, desimaali, vastaus;                                                                         // Alustetaan muuttujat

function celsiusToFahrenheit(celsius, desimaali) {                                                                      // Funktio joka muuntaa celsius asteet fahrenheit asteiksi                                    
    let fahrenheit = celsius * 9 / 5 + 32;                                                                              // Muunnoskaava celsius -> fahrenheit
    if (celsius < -273.15) {                                                                                            // Jos celsius on pienempi kuin absoluuttinen nollapiste, tulostetaan virheilmoitus
        console.log("Aika kylmä!");
        vastaus.innerText = "Lämpötila ei voi olla alle absoluuttisen nollapisteen!";
        document.getElementById("nollapiste").style.display = "block";                                                  // Näytä kuva kun absoluuttinen nollapiste
        return;
    } else if (desimaali === "1") {                                                                                     // Jos desimaali on 1, tulostetaan vastaus yhdellä desimaalilla      
        console.log("1 desimaalin tarkkuudella");
        vastaus.innerText = celsius + " Celsius astetta on " + fahrenheit.toFixed(1) + " Fahrenheit astetta";
        document.getElementById("nollapiste").style.display = "none";                                                   // Piilota kuva kun normaali lämpötila
    } else if (desimaali === "2") {                                                                                     // Jos desimaali on 2, tulostetaan vastaus kahdella desimaalilla
        console.log("2 desimaalin tarkkuudella");
        vastaus.innerText = celsius + " Celsius astetta on " + fahrenheit.toFixed(2) + " Fahrenheit astetta";
        document.getElementById("nollapiste").style.display = "none";                                                   // Piilota kuva kun normaali lämpötila
    } else if (desimaali === "3") {                                                                                     // Jos desimaali on 3, tulostetaan vastaus kolmella desimaalilla
        console.log("3 desimaalin tarkkuudella");
        vastaus.innerText = celsius + " Celsius astetta on " + fahrenheit.toFixed(3) + " Fahrenheit astetta";
        document.getElementById("nollapiste").style.display = "none";                                                   // Piilota kuva kun normaali lämpötila
    }
}

function fahrenheitToCelsius(fahrenheit, desimaali) {                                                                   // Funktio joka muuntaa fahrenheit asteet celsius asteiksi
    let celsius = (fahrenheit - 32) * 5 / 9;                                                                            // Muunnoskaava fahrenheit -> celsius
    if (fahrenheit < -459.67) {                                                                                         // Jos fahrenheit on pienempi kuin absoluuttinen nollapiste, tulostetaan virheilmoitus
        console.log("Aika kylmä!");
        vastaus.innerText = "Lämpötila ei voi olla alle absoluuttisen nollapisteen!";
        document.getElementById("nollapiste").style.display = "block";                                                  // Näytä kuva kun absoluuttinen nollapiste
        return;
    } else if (desimaali === "1") {                                                                                     // Jos desimaali on 1, tulostetaan vastaus yhdellä desimaalilla
        vastaus.innerText = fahrenheit + " Fahrenheit astetta on " + celsius.toFixed(1) + " Celsius astetta";
        document.getElementById("nollapiste").style.display = "none";                                                   // Piilota kuva kun normaali lämpötila
    } else if (desimaali === "2") {                                                                                     // Jos desimaali on 2, tulostetaan vastaus kahdella desimaalilla
        vastaus.innerText = fahrenheit + " Fahrenheit astetta on " + celsius.toFixed(2) + " Celsius astetta";
        document.getElementById("nollapiste").style.display = "none";                                                   // Piilota kuva kun normaali lämpötila
    } else if (desimaali === "3") {                                                                                     // Jos desimaali on 3, tulostetaan vastaus kolmella desimaalilla
        vastaus.innerText = fahrenheit + " Fahrenheit astetta on " + celsius.toFixed(3) + " Celsius astetta";
        document.getElementById("nollapiste").style.display = "none";                                                   // Piilota kuva kun normaali lämpötila
    }
}

function muunnaLampotila(event) {                                                                                       // Funktio joka suoritetaan kun painetaan "Muunna" nappia                            
    event.preventDefault();                                                                                             // Estää lomakkeen lähetyksen jotta vastaus pysyy näkyvillä    
    console.log("Muunnetaan lämpötila");                                                                                // Tulostaa konsoliin "Muunnetaan lämpötila" viestin    
    muunnos_valinta = document.getElementById("muunnos").value;                                                         // Hakee mikä muunnos on valittu 
    syote = document.getElementById("syote").value;                                                                     // Hakee käyttäjän syötteen
    desimaali = document.querySelector('input[name="desimaali"]:checked');                                              // Hakee valitun desimaalin ensimmäisestä input elementistä jonka name on "desimaali" 
    vastaus = document.getElementById("vastaus");                                                                       // Hakee elementin johon vastaus tulostetaan      

    if (syote === "") {                                                                                                 // Jos syötettä ei ole annettu, tulostetaan virheilmoitus
        console.log("Hups, et antanut lämpötilaa");
        vastaus.innerText = "Lämpötilaa ei ole syötetty!";
    } else if (isNaN(syote)) {                                                                                          // Jos syöte ei ole numero, tulostetaan virheilmoitus. On jo HTMLssä määritelty, mutta tarkistetaan vielä                               
        console.log("Hymm, mitä tämä on?");
        vastaus.innerText = "Syötteen tulee olla numero!";
    } else if (!desimaali) {                                                                                            // Jos desimaalia ei ole valittu, tulostetaan virheilmoitus
        console.log("Jotain puuttuu!")
        vastaus.innerText = "Valitse desimaalimäärä!";
    } else {                                                                                                            // Jos syöte on numero ja desimaali on valittu, muunnetaan lämpötila
        desimaali = desimaali.value;
        if (muunnos_valinta === "celsius-fahrenheit") {
            celsiusToFahrenheit(syote, desimaali);
        } else if (muunnos_valinta === "fahrenheit-celsius") {
            fahrenheitToCelsius(syote, desimaali);
        }
    }
}
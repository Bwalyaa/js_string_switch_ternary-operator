function check(){
    let input = document.querySelector("#bundeslandInfo").value
    let ergebnis = document.querySelector("#bundeslandInfoErgebnis")

    switch(input){
        case "Baden-Württemberg":
            ergebnis.innerHTML = "Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt";
            break;
        case "Bayern":
            ergebnis.innerHTML = "Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt";
            break;
        case "Berlin":
            ergebnis.innerHTML = "Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt";
            break;
        case "Brandenburg":
            ergebnis.innerHTML = "Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt";
        default:
            ergebnis.innerHTML = "Ein solches Bundesland gibt es in Deutschland nicht.";
            break;
    }       
}
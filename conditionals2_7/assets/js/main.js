function showtxt(){
    let input = document.querySelector("#mylist").value
    let ergebnis = document.querySelector("#Masse")

    switch(input){
        case "0":
            outputName.innerHTML = "<b>Brief und Postkarte</b> <br> L: 10 - 23,5 cm B: 7 - 12,5 cm H: bis 1 cm"
        break;
        case "1":
            outputName.innerHTML = "<b>DHL Paket 2 kg</b> <br> bis 60 x 30 x 15 cm"
        break;
        case "2":
            outputName.innerHTML = "<b>DHL Paket 5 kg</b> <br> bis 120 x 60 x 60 cm"
        break;
        case "3":
            outputName.innerHTML = "<b>DHL Paket 10 kg</b> <br> bis 120 x 60 x 60 cm"
        break;
        default:
            outputName.innerHTML = "<b>Extra große Größe</b>"
        break;
    }
}

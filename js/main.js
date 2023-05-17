
let monto = parseInt(prompt("Ingrese el monto incial (ARS): "))
let plazo = parseInt(prompt(" Plazo en dias:\n 30 - 60 - 90\n 120 - 140- 170\n 200 - 220 - 240\n 270 - 300 - 330 - 360"))
const tna = monto * 0.097

function interesSimple(monto, tna, plazo) {
    return (monto * tna * plazo) / (100 * 365)
}

let seguir = prompt("Monto: "+ monto + "$" + "\n" + "Plazo: "+ plazo + " " + "Dias" + "\n" + "Intereses: "+ interesSimple(monto, tna, plazo).toFixed(2) + "$" + "\n" + "TNA: " + "97% \n" + "\n" + "Desea continuar (SI/NO):").toLowerCase() 

while (seguir == "no") {
    let monto = parseInt(prompt("Ingrese el monto incial (ARS): "))
    let plazo = parseInt(prompt(" Plazo en dias:\n 30 - 60 - 90\n 120 - 140- 170\n 200 - 220 - 240\n 270 - 300 - 330 - 360"))
    const tna = monto * 0.097

    function interesSimple(monto, tna, plazo) {
        return (monto * tna * plazo) / (100 * 365)
    }

    let seguir = prompt("Monto: "+ monto + "$" + "\n" + "Plazo: "+ plazo + " " + "Dias" + "\n" + "Intereses: "+ interesSimple(monto, tna, plazo).toFixed(2) + "$" + "\n" + "TNA: " + "97% \n" + "\n" + "Desea continuar (SI/NO):").toLowerCase()

    switch (seguir) {
        case "si":
            alert ("Neto a cobrar: \n" + (monto + interesSimple(monto, tna, plazo)).toFixed(2))
            break;
    }
}

switch (seguir) {
    case "si":
        alert ("Neto a cobrar: \n" + (monto + interesSimple(monto, tna, plazo)).toFixed(2))
        break;
}


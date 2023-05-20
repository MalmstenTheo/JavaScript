let monto = parseInt(prompt("Ingrese el monto incial (ARS): "))
let plazo = parseInt(prompt(" Plazo en dias:\n 30 a 360"))
const tna = 97

function interesSimple(monto, tna, plazo) {
    return (monto * tna * plazo) / (100 * 365)
}

let seguir = prompt("Monto: "+ monto + "$" + "\n" + "Plazo: "+ plazo + " " + "Dias" + "\n" + "Intereses: "+ interesSimple(monto, tna, plazo).toFixed(2) + "$" + "\n" + "TNA: " + "97% \n" + "\n" + "Desea continuar (SI/NO):").toLowerCase() 

while (seguir == "no") {
    let monto = parseInt(prompt("Ingrese el monto incial (ARS): "))
    let plazo = parseInt(prompt(" Plazo en dias:\n 30 a 360"))
    const tna = monto * 0.097

    function interesSimple(monto, tna, plazo) {
        return (monto * tna * plazo) / (100 * 365)
    }

    let seguir = prompt("Monto: "+ monto + "$" + "\n" + "Plazo: "+ plazo + " " + "Dias" + "\n" + "Intereses: "+ interesSimple(monto, tna, plazo).toFixed(2) + "$" + "\n" + "TNA: " + "97% \n" + "\n" + "Desea continuar (SI/NO):").toLowerCase()

    if (seguir == "si") {
            alert ("Neto a cobrar: \n" + (monto + interesSimple(monto, tna, plazo)).toFixed(2))
            break;
    }
}

if (seguir == "si") {
    alert ("Neto a cobrar: \n" + (monto + interesSimple(monto, tna, plazo)).toFixed(2))
}
// Scrivi una funzione che accetti una stringa come argomento e la restituisca girata (es. "Ciao" -> "oaiC")

// dobbiamo dichiarare una stringa 
// ci facciamo dare una stringa tramite un prompt
// tramite revers restituiamo in uscita con revert

let uservalue= prompt("inserisci una stringa ");

let arrayrevers=[];
reverseword(uservalue)

document.getElementById("risultato").innerHTML=`${arrayrevers}`



function reverseword(uservalue)
{
    

    arrayrevers.push(uservalue);
    // usco questo coamndo per splittare carattere per carattere
    arrayrevers= uservalue.split("");
    // comando usato per invertire
    arrayrevers.reverse().join("");

    return arrayrevers;


}

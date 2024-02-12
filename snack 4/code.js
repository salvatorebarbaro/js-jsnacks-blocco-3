// Scrivi una funzione  che accetti una stringa come parametro e restituisca la stringa con i caratteri ordinati alfabeticamente
// Es: riordina("webmaster") :freccia_destra: "abeemrstw"


const testodaordinare=[];

document.getElementById("bottone").addEventListener("click",
 function()
 {
    // prendo il valore
    const testo =document.getElementById("testo").value;

    if(testo== "")
    {
        alert("reinserire i valori");
        // passo il ricaricare la pagina tramite una funzione anonima che ci da la comodià di eseguire Gestori di eventi e funzioni di richiamo
        setTimeout(function(){
            location.reload()
        } ,3500);
    }
    // assegno all'array la stringa convertita
    testodaordinare.push(riordina(testo));
    // richiamo sulla cosole il risultato
    console.log(testodaordinare);

    // stampo a schermo
    document.getElementById("risultato").innerHTML=testodaordinare;
 }
 
 
 
 
 
 )



 function riordina (stringa)
 {
 
//  / dividiamo le lettere della parola inserita successivamente andiamo a ordinarle e dopo le uniamo nuovamente con join
    return stringa.split("").sort().join("");
 }
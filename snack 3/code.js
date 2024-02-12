// Snack 3:
// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
// Es:
// abbiamo un array così: arrayNumeri = [0, 1, 2, 3, 4, 5, 6]
// La nostra funzione viene dichiarata ad esempio così function tagliaArray(array, posizioneMin, posizioneMax)
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “posizioneMin” e “posizioneMax”
// Nel nostro caso, se la chiamassimo così tagliaArray(arrayNumeri, 2, 4) ci restituirebbe un array così composto:
// [2, 3, 4]
let x;
const arraylungo=[];
let parte_di_array;

x=prompt("inserisci lunghezza dell'array")


arrayeasy(x);

const a=prompt("inserisci valore per a");
const b=prompt("inserisci valore per b");

tagliarray(a,b,arraylungo)

document.querySelector("#risultato").innerText=`il valore tagliato dall'array in base ai dati inseriti è ${parte_di_array} avendo selezionato ${a},${b} come valori`

function tagliarray(a,b,array=[])
{
    if(a>0)
    {

    }
    else
    {
        alert("inserisci di nuovo i parametri");
        setTimeout(location.reload(),3500);
    }
    if(b>array.length)
    {
        alert("inserisci di nuovo i parametri");
        setTimeout(location.reload(),3500);
    }
    

    parte_di_array= array.slice(a,b);
    
    console.log(parte_di_array)
    return parte_di_array;
    
    

}

function arrayeasy(n)
{
    for(let i=0 ; i<n;i++)
    {
        const element= prompt("inserisci valore da inserire nell array");
        
        arraylungo.push(element);
    }
    console.log(arraylungo);
    return arraylungo;

}

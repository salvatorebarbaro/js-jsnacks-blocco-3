const array1=[];

const array2=[];

const arrayfusion=[];


for( let i=0 ; i<3;i++)
{
    const element =prompt(`inserisci valore ${i} per array 1`)

    array1.push(element);
}

for( let i=0 ; i<3;i++)
{
    const element =prompt(`inserisci valore ${i} per array 2`)

    array2.push(element);
}


makelongarray();

function makelongarray()
{
   for( let i=0;i<3;i++)
{
    array1[i];
    array2[i];

    arrayfusion.push( array1[i],array2[i]);

}
    console.log(arrayfusion);
    return arrayfusion;
    
}

document.getElementById("risultato").innerHTML=`${arrayfusion}`
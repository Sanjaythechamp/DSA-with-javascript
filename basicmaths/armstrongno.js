// in armstrong no we take cubes of lastdigit and add then compare to original no :



function armstrongNO(n){
    let originalNO = n;
let sum =0;
while(n>0){
    let lastdigit = n%10;
    n = Math.floor(n/10);
    let square = lastdigit * lastdigit * lastdigit;
     sum = sum +square ;
}
 if(originalNO === sum  ){
    console.log("this no is armstrongNo")
 }
 else{
    console.log("this no is not an armstrong no ")
 }

}

  armstrongNO(370);

function countDigits(n) {
    let x = n;
    let count = 0;
    while (x !== 0) {
        x = Math.floor(x / 10);  // Math.floor gives the flooting point no into integer:
        count++;
    }
    return count;
 }
 
 let n = 1266645;
 console.log("Number of digits in " + n + " is " + countDigits(n));
 




 // also we do as 

 function cnt(n){

let x = n.toString();
return x.length;

 }
  let result = cnt(444)
  console.log(`${result}`)

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
 
/*  Imp point : let supoose we count that how many digit in  a = 0342313045 
so as we count there are total 10 digits ,but when we make program and count the no of digit it come as 8 , put this a  no in above
code to check the output :
How is this possible that in a total 10 digit are occur but when we count there are total 8 digit come due to 

[MOST IMPORTANT POINT ]When you start with a 0, JavaScript interprets this as an octal (base-8) number if possible.

Converting 0342313045 from Octal to Decimal:
To understand why 0342313045 becomes 57645141, let’s convert it step-by-step from octal to decimal manually.

The octal number 0342313045 can be broken down as:

0*8power9 + 3*8power8 +4*8power7 ...................... 5*8power0 = when we sum  57645141

*/

 // also we do as 
// some concept related to  length method : 
//The length property in JavaScript is a commonly used feature of both strings and arrays,
//and it works a bit differently for each. 

 function cnt(n){

let x = n.toString();
return x.length;

 }


  let result = cnt(444)
  console.log(`${result}`)


      /*
[ for practice only]
let n = 5432434;
let x = n.toString();
console.log(x.length)
becaue we can only find the length of string and array not a number ,thats why we convert firstly into string then findout length;
*/

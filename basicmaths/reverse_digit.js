function reverse_digit(n){
  let reverseNO =0;
  let cnt =0;
    while(n>0){
       
        let lastdigit =  n % 10;
        cnt = cnt +1;
        n = Math.floor(n/10);
        reverseNO =(reverseNO *10 )+lastdigit;

    }
    return reverseNO;

}
let result =reverse_digit(123456778);
console.log(`reverse digit is ${result}`)

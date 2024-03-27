function palindromeNO(n){
  let reverseno = 0;         // here why we take original no because the n is decrease in the while
  
                            // due to this n will never equal to reverseno that's why we store n in original no and we do calucation with n so that its O.value not effected
  let originalNO  = n;
while(n>0){
    let lastdigit = n %10;
    reverseno = (reverseno*10)+lastdigit;     
    n = Math.floor(n/10);

}
if( originalNO === reverseno){
    console.log("palindrome NO")
}
else{
    console.log("not an palindromeNO")
}


}
palindromeNO(121);
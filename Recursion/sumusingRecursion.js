function sumUsingRecursion(n,sum){
  
if(n<1){
    console.log(`sum is :${sum}`)
  return ;
}
else{
    sum  = sum +n;
    n--;
}
 
 return sumUsingRecursion(n,sum);


}

 sumUsingRecursion(6,0); 

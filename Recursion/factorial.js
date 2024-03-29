
function factorial(n ,result,i){
    
if(n<i){
    console.log(`The factorial of N no is : ${result}`)
    return ;
}
else{
    result =  result * n;
    n--;
}
factorial(n,result,i);

}
factorial(3,1,1);   // 5 is the no you want to factorial 

// which problem i get stuck here 
//  i take result  is  0 
// sol ->  so due to this modified  result is  1 we take;
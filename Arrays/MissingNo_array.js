// if we know that element will always start from natural no: THEN THIS CODE MIGHT BE EXECUTE BUT 
// this is not a good aproach:
/*
let arr = [1,2,4,5];
let j = arr[i];    
for(let i= 0 ;i<arr.length-1;i++){
  
    if(arr[i] === j ){
        j = j+1;
    }

    
    else{
            console.log(`This element is not present in ${j}`)
            break;
         }
    }


 
*/


 //Another approach : TO DO THE SAME CODE  AGAIN REVIEW THIS CODE : 

 /*
 
 let arr = [1,2,3,4,6];
 for(let i=1;i<=arr.length;i++){
   let flag = 0;
    for(let j = 0;j<arr.length-1;j++){
        if(arr[j]===i){
            flag =1;
            break;
        }
    }
    if(flag === 0){
    console.log(i);
    return i;
}

 }

 */

 // BETTER APPROACH :
  
 // USING HASING WE DO 

 /*
 let arr = [1,2,3,5,6];
 let n  = arr.length;


 let hash = new Array(n+1).fill(0);

 for(let i=0;i<n;i++){
   
   hash[arr[i]]+= 1;

     
 }
 for(let i=1;i<n;i++){
         if(hash[i] === 0){
            console.log(`This element is mising from the array ${i}`)
            break;

         }
 }
 
 //Tc =O(2N) 
 //sc  = O(N)

 */

 // optimal approach of this code is :  
 //condition is natural no in sorted order

// using sum 
//using xor
// i place of missing no  we put the  0 value

/*

let arr =  new Array(10);            // firstly we declare element in the array
let n = arr.length;
console.log(arr.length)
let sum1  =  n*(n+1)/2;
console.log(sum1);
arr = [1,2,3,4,5,6,7,9,10]
let sum2  = 0 ;
for(let i=0;i<arr.length;i++){
    sum2 = sum2+arr[i];
}

let result = sum1 - sum2 ;
console.log(`The missing no is ${result}`)


*/

// using xor optimal solution 

function xor(){
let n =10;
let arr = [1,2,3,4,5,6,7,8,10]
let xor1 = 0 ;
let xor2 = 0 ;

for(let i=0;i<n+1;i++){
   xor1^=i;
}

for(let i=0;i<n;i++){
    xor2^=arr[i]
}

return xor1 ^ xor2;

}
let res = xor();
console.log(`The resultant value will be ${res}`)


//Tc of this code will be  O(2N) 
// can we do with single N , code is

/*

xor2 = 0 ;
for(let i=0;i<n-1;i++){
    xor2 = xor2 ^ arr[i];
    xor1 = xor1 ^ (i+1);
}
xor1 = xor1 ^ n;
return xor1^ xor2;
*/

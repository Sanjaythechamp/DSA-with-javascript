// Brute force approach 
/*
function longest_subarray(){

let s = 3 ;
let arr = [1,2,4,1,1,0,0,1];
let n = arr.length;

let length  = 0;

for(let i = 0 ;i<n;i++){
    let sum = 0;
    for(let j=i;j<n;j++){

            sum = sum + arr[j];
        if(sum === s){
            length  =  Math.max(length ,j-i+1)
        }


    }
    
}
return length;
}
let res = longest_subarray();
console.log(`The longest subarray sum is ${res}`)



// TC OF THIS CODE WILL BE o(n*n )


*/ 

// Better approach 
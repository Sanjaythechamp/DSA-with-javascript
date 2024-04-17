// Brute force 

/*
let arr = [8,5,6,2,11]
let n = arr.length;
let target_sum = 14;
let sum = 0;

for(let i=0;i<n;i++){

    for(let j=i+1;j<n;j++){
    

        sum = arr[i]+arr[j];
        
        if(sum === 14){
            console.log(`The value present in ${i} ${j} indexe`)
            return i,j;

        }
        
        sum = 0;

    }
}


*/

// tc is O(n*n)
// sc is O(1) 

// BETTER SOLUTION :

/*

function twosum(arr,target,n){
let hashMap = {};
for(let i = 0;i<n;i++){

    let a = arr[i];
    let more = target - a ;
    if(more in hashMap){
        return ["yes",hashMap[more],i];
    }
    hashMap[a] = i;
}
return "No";

}



let  arr = [2,6,5,8,11];
let n = arr.length;
let target = 14;
let res  = twosum(arr,target,n);
console.log(`The value present  is ${res}`)

// tc O(N)
// sc O(N)


*/


// optimal solution  :: 

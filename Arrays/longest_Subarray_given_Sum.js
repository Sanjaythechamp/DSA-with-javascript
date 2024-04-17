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
             if(sum > s) break;   // due to this we reduce some  tasks 
            sum = sum + arr[j];
        if(sum === s){
            length  =  Math.max(length ,j-i+1)
        }

       // console.log(`runs ${j}`);
    }
    
}
return length;
}
let res = longest_subarray();
console.log(`The length  longest subarray sum is   ${res}`)



// TC OF THIS CODE WILL BE o(n*n )



*/


// optimal solution 

function max(){
let arr  = [1,2,3,1,1,1,1,3,3];
let left = 0;
let right = 0;
let n = arr.length;
let sum = 0;
let max_length = 0;

while(left<n){
 sum =  sum + arr[left];
if(sum === 6){
     max_length =Math.max(max_length,left-right+1);

     
}
else if(sum > 6){
    sum = sum - arr[right]
    right++;
}
else{

}
left++;



}
return max_length;
}
let res = max();
console.log(`The max_length of longest sub-array with given Sum length is   ${res}`)

// Tc is O(N)
// sc is O(1)
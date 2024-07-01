// Floor and Ceil Problem 
// ceil problem same as lowerbound

// floor -> return the largest no , which is less than or equal to x 

function floor(){
    let arr = [10,20,25,30,40];

let n  = arr.length;
let x = 25;
let low = 0;
let high = n-1;

while(low<=high){
    let mid = Math.floor((low+high)/2);
    
    if(arr[mid]<=x){
     ans = mid;
     low = mid+1; // here we do mid+1 because we find largest . so as we know know [in the array left side is smallest element is present and right side largest element is present . so due to this we do mid +1 ]

    }
    else{
        high = mid-1;
    }


}
return ans;
}
let result = floor();
console.log(result);
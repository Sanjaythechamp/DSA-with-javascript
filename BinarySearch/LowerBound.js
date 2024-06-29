// find the  first as the smallest index where the value at that index is greater or equal to a given array .
//difference between upper and lower bound is in lower bound it takes greater thean or equal to and in upper bound it takes only greater than .


function LowerBound(){
    let target = 9;
    let arr = [2,5,8,15,19,19]
    let low = 0;
    let ans = arr.length;
    let high = arr.length-1;
    
    while(low<=high){
         let mid  = Math.floor((low+high)/2);
        
        if(arr[mid] === target){
            return mid;
        }
        else if(arr[mid]>=target){
            ans = mid;
            high = mid-1;
        }
        else{
         low = mid+1;
        }
        
    }
    return  ans;
}
let res = LowerBound();
console.log(res)
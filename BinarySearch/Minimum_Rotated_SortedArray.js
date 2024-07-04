function Minimum(){
    let arr = [7, 8, 9, 1, 2, 3, 4, 5, 6];
    let low = 0;
    let high = arr.length-1;
    let ans = 100000;  // here take largest NO (INT_MAX)
    while(low<=high){
        let mid = Math.floor((low+high)/2);
        
        if(arr[low]<=arr[mid]){
            ans = Math.min(ans,arr[low])
            low = mid+1;
        }
        else{
             
           ans  = Math.min(ans,arr[mid])
           high = mid-1;
        }
 
    }
    return ans;

}
let result = Minimum();
console.log(`Minimum is ${result}`);
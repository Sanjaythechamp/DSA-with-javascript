// it is same as finding Minimum in Roated sorted array . here we find the index,at which minimum value is located.
// and that index will be  the no of times array has been Rotated.
function count(){
    let arr= [ 4,5,6,7,0,1,2,3]
    let low = 0;
    let high = arr.length-1;
    
    let ans = 100000;
    while(low<=high){

        let mid = Math.floor((low+high)/2);
        if(arr[low]<=arr[high]){
            ans = Math.min(ans,arr[low]);  // check in the copy 
            break;

        }
        if(arr[low<=arr[mid]]){
            ans  = Math.min(ans,arr[low]);
            low = mid+1;        // we know that when array is rotated largest values go to front , and smaller values go to right:
            

        }
        else{
            high = mid-1;
        }


    }
    return ans ;
}
let result = count();
console.log(`Array roated ${result } times`)
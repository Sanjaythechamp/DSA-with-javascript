// here in the array duplicate elements are present

function SearchElement_RotatedArray2(){

    let arr = [1,1,1,3,1];
    let target = 3;
    let low=0;
    let high=arr.length-1;

    while(low<=high){
        let mid = Math.floor((low+high)/2);

        if(arr[mid] === target){
    return mid;
}   
       if(arr[low]===arr[mid] && arr[mid]===arr[high]){
        low++;
        high--;
        continue;
       }

       if(arr[low]<=arr[mid]){
        if(arr[low<=target] && target <= arr[mid]){
            high = mid-1;
        }
        else{
            low = mid+1;
        }
       }
       else{
        if(arr[mid]<=target && target <=arr[high]){
          
            low = mid+1;
        }
        else{
            high = mid-1;
        }
       }
          
    

    }
    return -1;
}

let result = SearchElement_RotatedArray2();
console.log(result)


//Tc of this code is O(log2N) [logbase2N]
// for worst case is O(log)
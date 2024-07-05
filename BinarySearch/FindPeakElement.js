/*
function peakElement(){
    let arr = [1,2,3,1];
    let n = arr.length;
    let min = -1;
    if(arr[0]>arr[0+1] && arr[0]>min ){
        return arr[0];

    }
    if(arr[n-1]>arr[n-2] && arr[n-1]> min){
        return arr[n];
    }
    for(let i= 1;i<n-1;i++){
        if(arr[i]>arr[i+1] && arr[i]> arr[i-1]){
            return arr[i];
        }
        
    }
    return -1;

}
let res= peakElement();
console.log(res)



*/

// optimal approach 
function peakElement2(){
    let arr = [1,2,3,1];
    let n = arr.length;
    let min = -1;
    if(arr[0]>arr[0+1] && arr[0]>min ){
        return arr[0];

    }
    if(arr[n-1]>arr[n-2] && arr[n-1]> min){
        return arr[n];
    }
    

let low = 1;
let high =  n-1; 
        while(low<=high){
            let mid = Math.floor((low+high)/2);

            if(arr[mid]>arr[mid+1] && arr[mid]> arr[mid-1]){
                return arr[mid]
            }
            else if(arr[mid]>arr[mid-1]){
                  low = mid+1;
            }
            else if(arr[mid]<arr[mid+1]){
                high  = mid-1
            }
    else{
        // low = mid +1
    }
        
        
    }
    return -1;

}
let res2 = peakElement2();
console.log(res2)

 

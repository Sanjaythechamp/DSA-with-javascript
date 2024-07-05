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

// optimal approach 

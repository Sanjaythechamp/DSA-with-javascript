function BinarySearch(){
    let arr = [ 3,4,6,7,9,12,16,17];
    let target = 12;
    let low = 0;
    let n = arr.length ;
    let high = n-1;
    while(low<=high){
        let mid = Math.floor((low+high)/2);
        if(arr[mid]===target){
            return mid;
        }
        else if(target > arr[mid]){
            low = mid +1;
        }
        else{
            high = mid-1;
        }
    }
    return mid ;
}
let res = BinarySearch();
console.log(`The value is present at ${res} index`)
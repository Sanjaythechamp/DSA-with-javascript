function SearchElement(){

    let arr = [4,5,6,7,0,1,2];
    let target = 0;
    let low=0;
    let high=arr.length-1;

    while(low<=high){
        let mid = Math.floor((low+high)/2);

        if(target === arr[mid]){
            return mid;
        }
        else{
            return -1;
        }

        if(arr[low]<=arr[mid]){

        if(arr[low]<=target && target <=arr[mid]){
            high = mid-1;
        }
        else{
            low = mid+1;
        }
    }
    else{
        if(  arr[mid]<=target && target <=arr[high]){
            low = mid+1;
        }
        else{
            high = mid-1;
        }
    }
}
return -1;

}
let res_index = SearchElement();
console.log(`The element is found at ${res_index}`)
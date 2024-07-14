
// this problem is same as Allocation Books : 
function CountPainter(arr,mid,k){
    let painter = 1;
    let sum =0;
for(let i=0;i<arr.length;i++){

    sum = sum+arr[i];
    if(sum>mid){
        painter++;
        sum = arr[i]
    }
    
}
if(painter>k){
    return false;
}
else{
    return true;
}



}




function Painter_partition(){
    let arr = [5,5,5,5];
    let k = 2;
   let sum =0;
for(let i=0;i<arr.length;i++){
    sum+=arr[i]
}

let high = sum;
    let low = Math.min(...arr)

    while(low<=high){
        let mid = Math.floor((low+high)/2);
      
        if(CountPainter(arr,mid,k) === true){
            ans = mid
            high = mid-1;

        }
        else{
            low = mid+1;
        }
           


    }

return ans;

}
let result = Painter_partition();
console.log(result);

//O(N * log(sum(arr[])-max(arr[])+1))
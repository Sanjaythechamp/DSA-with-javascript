// this code is same as allocation of books or painter problem

function countSubarray(arr,mid,k){
    let sum = 0;
    let countSubarray =1;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];

        if(sum>mid){
            countSubarray++;
            sum = arr[i]
            
        }
    }
    if(countSubarray>k){
        return false
    }
    else{
        return true;
    }
}



function SplitArray(){
    let arr= [1,2,3,4,5];
    let k = 3 //[3  Subarray]
    let low = Math.max(...arr);
    let sum = 0;
    for(let i=0;i<arr.length;i++){
             sum+=arr[i]
    }
    let high = sum;

    while(low<=high){
        let mid = Math.floor((low+high)/2);
        
        if(countSubarray(arr,mid,k)=== true)
        {
            ans = mid;
            high = mid-1
        }
        else{
            low= mid+1;
        }
    }


return ans;    

}
let result = SplitArray();
console.log(result)
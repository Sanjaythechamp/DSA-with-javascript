// find the smallest divisior given a threshold :

// optimal approach

function SumOfdivisior(arr,mid){
let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum += Math.ceil(arr[i]/mid);

    }

    return sum ;

}



function divisior(){
    let arr = [8,4,2,3];
    let threshold = 10;

let low = 1;
let high = Math.max(...arr);

while(low<=high){
    let mid = Math.floor((low+high)/2);

    let current_ans =  SumOfdivisior(arr,mid);
      if(current_ans<=threshold){
   
        high = mid-1;


      }
      else{
        low = mid+1;
      }

}
return low;


}

let result = divisior();
console.log(`smallest divisior is : ${result}`)

// tc of this code is : O(logbase2(max))* O(N)
// sc is O(1)

// Brute Force Method: it takes -> O(N)

function FindSingleElment(){

    let arr = [1,1,2,2,3,3,4,5,5,6,6];
   for(i =0;i<arr.length;i++){

    if(i===0){           // it is for first element
        if(arr[i]!== arr[i+1]){
            return arr[0];
        }

    }
 if(i===arr.length-1){
    if(arr[i]!==arr[arr.length-1]){         // it is for last element 
        return arr[i];
    }
 }
 else{
    if(arr[i]!==arr[i-1] && arr[i]!==arr[i+1]){     // it is for middle element 
        return arr[i];

    }
 }

   }



}
let result = FindSingleElment();
console.log(`Single value is : ${result}`)



// optimal approach  using Binary Search : 

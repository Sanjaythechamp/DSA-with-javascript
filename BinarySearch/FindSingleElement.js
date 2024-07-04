
// Brute Force Method: it takes -> O(N)

function FindSingleElment(){

    let arr = [1,1,2,2,3,3,4,5,5,6,6];
   for(i =0;i<arr.length;i++){

    if(i===0){
        if(arr[i]!== arr[i+1]){
            return arr[0];
        }

    }
 if(i===arr.length-1){
    if(arr[i]!==arr[arr.length-1]){
        return arr[i];
    }
 }
 else{
    if(arr[i]!==arr[i-1] && arr[i]!==arr[i+1]){
        return arr[i];

    }
 }

   }



}
let result = FindSingleElment();
console.log(`Single value is : ${result}`)
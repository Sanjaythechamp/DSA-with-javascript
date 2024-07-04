
// Brute Force Method: it takes -> O(N)
/*
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

*/


// optimal approach  using Binary Search : 


function FindSingleElement() {
    let arr = [1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6];
    
    let n = arr.length;
    
    // Check if the first element is unique
    if (arr[0] !== arr[1]) {
        return arr[0];
    }
    
    // Check if the last element is unique
    if (arr[n - 1] !== arr[n - 2]) {
        return arr[n - 1];
    }
    
    // Binary search for the single element
    let low = 0;
    let high = n - 1;

    while (low <= high) {
        if (low === high) {
            return arr[low];
        }
        
        let mid = Math.floor((low + high) / 2);
        
        // Check if mid is the single element
        if (arr[mid] !== arr[mid - 1] && arr[mid] !== arr[mid + 1]) {
            return arr[mid];
        }
        
        // Determine which half to search
        if ((mid % 2 === 0 && arr[mid] === arr[mid + 1]) || (mid % 2 === 1 && arr[mid] === arr[mid - 1])) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    
    // Should never reach here in a properly structured array
    return -1;
}

let res = FindSingleElement();
console.log("The single element is:", res); // Output should be 4

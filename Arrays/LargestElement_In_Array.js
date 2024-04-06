//  so the brute force method is apply the sorting algorithm and find the last element


// But Optimal solution will be :

function largestElement(n,arr){

    let largest = arr[0];
    for(let i=1;i<n;i++){
        if(arr[i]>largest){                  // if we use (arr[i]<largest) then it will give smallest element in the array 
            largest = arr[i];
        }
    }
    return largest;


}
let arr = [3,4,23,5,754,3];
 let res = largestElement(arr.length,arr);
 console.log(`The largest Element in Array is ${res}`)


 // Tc O(n)
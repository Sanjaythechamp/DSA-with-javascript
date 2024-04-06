// for Brute force the tC will be  O(nlogn)+n
// for Better Solution the tc will be O(2n)
// for optimal solution will be O(N)


// Optimal Solution 

function SecondLargest(n,arr){
    let second_largest = -1;
    let largest = arr[0];
    for(let i= 1;i<n;i++){
        if(arr[i]>largest){                                       // if we have to find second second smallest element 
                                                                    // then we simply us arr[i]<largest :
            largest = arr[i];
            second_largest = largest
        }
        else if (arr[i]<largest && arr[i]>second_largest){
            second_largest = arr[i];
        }
      
    }
    return second_largest;
}
let  arr = [5,5,5,5,5,4];
let res = SecondLargest(arr.length,arr)
console.log(`The second Largest value is ->${res}`)


// Tc is O(N)
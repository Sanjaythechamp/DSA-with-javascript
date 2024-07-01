
//Brute force : 

/*
function First_lastOccurence(){
let arr = [1,2,4,4,4,5,7,9,10];
let search_value = 4;
let first_occurence = -1;
let last_occurence = -1;

let flag = 0;
for(let i=0;i<arr.length;i++){


if(flag===0){
if(arr[i]===search_value){
  first_occurence = i;
  flag = flag+1;
    
}
}
else if(arr[i] === search_value){
    last_occurence = i;
}
else{

}




}
return {first_occurence,last_occurence};
}
 let res = First_lastOccurence();
 console.log(res)

 // Tc -> O(N)


 */

 // Optimal Solution :
 
 
 function LowerBound(arr, n, x) {
  let low = 0;
  let high = n - 1;
  let ans = n; // Initialize ans to n (out of bounds value)
  while (low <= high) {
      let mid = Math.floor((low + high) / 2);

      if (arr[mid] >= x) {
          ans = mid; // Update ans to current index
          high = mid - 1; // Move to the left side
      } else {
          low = mid + 1; // Move to the right side
      }
  }
  return ans;
}

function UpperBound(arr, n, x) {
  let low = 0;
  let high = n - 1;
  let ans = n; // Initialize ans to n (out of bounds value)
  while (low <= high) {
      let mid = Math.floor((low + high) / 2);

      if (arr[mid] > x) {
          ans = mid; // Update ans to current index
          high = mid - 1; // Move to the left side
      } else {
          low = mid + 1; // Move to the right side
      }
  }
  return ans;
}
function first_last() {
  let arr = [2, 4, 6, 8, 8, 8, 11, 13];
  let n = arr.length;
  let x = 8;

  let first = LowerBound(arr, n, x);
  let last = UpperBound(arr, n, x);

  // one condition see  in the copy :
// condition is if first and last occurence not find then  we return -1 -1 

 
first_last();

/*
function Everything_right_should_be_smaller(){

let arr = [10,22,12,3,0,6];
let arr2 = new Set();                 // it should containe element everthing in right should be smaller
let n = arr.length;
let count;
for(let i=0;i<n;i++){
  count = 0 ;
for(let j=i+1;j<n;j++){

  if(arr[i]>arr[j]){
  count++;
  }
  else{
    break;
  }
}
let k=i;
if(count===n-k-1){
  arr2.add(arr[k]);
}




}
return arr2;
}
let result = Everything_right_should_be_smaller();
console.log(result)

*/


// tc is O(n*n);
// sc : i did not use extra space to solve the algorithm rathe i used extra space to store the ans 
// and that space complexity is O(N) for storing the ans.





// OPTIMAL APPROACH : optimal approach:

// SMALLEST NO IS  = Number.MIN_SAFE_INTEGER


function Everything_right_should_be_smaller(){

  let arr = [10,22,12,3,0,6]
  let arr2 = [];

  let maxi = Number.MIN_SAFE_INTEGER;
  let n = arr.length;

  for(let i=n-1;i>=0;i--){
    if(arr[i]>maxi){
      arr2.push(arr[i]);
    }
    maxi = Math.max(maxi,arr[i]);
  }
return arr2;
}
 
  let result = Everything_right_should_be_smaller();
  console.log(result)
  
  // tc is O(N)
  //sc is O(1)
  //sc -> O(N) for storing the ans. but  if someone says what is the  extra space you need to solve the algo then it will be O(1);
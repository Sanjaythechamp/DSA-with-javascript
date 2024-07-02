
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
 
 
 // look for  first occurence on the left half
 function firstOccurrence(){
  let x= 8;
  let arr = [2,4,6,8,8,8,11,13];
    let first =-1;

  let low = 0;
  let high = arr.length-1;

  while(low<=high){
    let mid = Math.floor((low+high)/2);

    if(arr[mid]===x){
      first = mid;
      high = mid-1;
    }
    else if(arr[mid]>x){
      high = mid-1;

    }
    else{
      low = mid+1;
    }

  }

return first ;
 }

 
 function lastOccurrence() {
  let x= 8;
  let arr = [2,4,6,8,8,8,11,13];
    let last =-1;

  let low = 0;
  let high = arr.length-1;

  while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      // maybe an answer
      if (arr[mid] === x) {
          last = mid;
          // look for larger index on the right
          low = mid + 1;
      }
      else if (arr[mid] < x) {
          low = mid + 1; // look on the right
      }
      else {
          high = mid - 1; // look on the left
      }
  }
  return last;
}

 
let first = firstOccurrence();
let last = lastOccurrence();

console.log(first)
console.log(last)



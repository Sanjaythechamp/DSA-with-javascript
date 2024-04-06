/*
BRUTE FORCE SOLUTION
function Removeduplicate(arr,n){
    let myset =  new Set();
for(let i=0;i<n;i++){
 myset.add(arr[i]);
}

return myset;
}
let arr = [1,2,3,3,3,4,4,5,5,5,6];
 let res = Removeduplicate(arr,arr.length);
 res.forEach((values)=>{
console.log(values);
 })
console.log(" The size of the set is ",res.size);

// The Tc is ->> O(N)
// how is this occur 

/*

*/
/*
Creating the Set (myset.add()): Adding an element to a Set
has an average time complexity of O(1). Since you're adding each 
element from the array to the Set once, this operation's time complexity is O(n),
where n is the number of elements in the input array.

Returning the Set (return myset): This operation doesn't involve any additional computation.
It simply returns the Set. Its time complexity is O(1).

*/


// BETTER SOLUTION / Optimal Solution :




function Removeduplicate(arr,n){

    let i =0;
    for(let j=1;j<n;j++){
        if(arr[j]!=arr[i]){
            arr[i+1] = arr[j];
            i++;
        }
    }
    


return (i+1);


}
let arr = [1,2,3,4,4,4,4,5];
const res = Removeduplicate(arr,arr.length);
for(let i =0; i<res;i++){                                  // here only we print so no complexity we measure 
    console.log(` the sorted array is  -> :${arr[i]}`);
}
console.log(` The length of Sorted Array is : ${res}`);

// tc O(N)
// sc 0(1)
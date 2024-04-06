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

Creating the Set (myset.add()): Adding an element to a Set
has an average time complexity of O(1). Since you're adding each 
element from the array to the Set once, this operation's time complexity is O(n),
where n is the number of elements in the input array.

Returning the Set (return myset): This operation doesn't involve any additional computation.
It simply returns the Set. Its time complexity is O(1).

*/

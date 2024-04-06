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
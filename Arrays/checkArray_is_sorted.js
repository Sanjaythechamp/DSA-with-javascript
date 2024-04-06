function checkArray(n,arr){
for(let i=0;i<n;i++){
    if(arr[i]<=arr[i+1]){

    }
        else{
             return false;
       }
  }
return true;

}
let arr = [1,2,5,4,5,6];
 let res = checkArray(arr.length,arr);
 console.log(`The array is ${res}`);

 // Tc  -> O(N)
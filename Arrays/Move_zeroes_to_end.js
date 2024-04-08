function Move_zeroes_to_end(arr,n,i){
  i =0;
    while(i<n){
    if(arr[i] === 0 && arr[i+1]!== 0 ){
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        
      }
      i++;

       


}
return arr;

}
let arr = [0,1,2,0,3,4];
let res = Move_zeroes_to_end(arr,arr.length,0)
console.log(`The ans is ->${res}`);
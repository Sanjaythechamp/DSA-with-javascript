function leftRotate_Array_by_one_place(arr,n){

let temp = arr[0];
let i=0;
while(i<n-1){
    arr[i] = arr[i+1];
i++;
}
arr[i] = temp;

return arr;
}
let arr = [1,2,3,4,5,6];
 let res = leftRotate_Array_by_one_place(arr,arr.length);
 console.log(`The leftRotate the Array by one Place ${res}`);

/* 
The tc is O(N)
sc is O(1)

if someone says what is the space that you used to solve the algorithms - Then ans will be O(N):
but if some says what is the "extra space" that you used to solve the  algorithms then ans will be : O(1)



*/

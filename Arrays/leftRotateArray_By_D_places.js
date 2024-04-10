
//Brute force Method

let d =3;
let arr = [1,2,3,4,5,6];
let n = arr.length;
let temp = new Array();
for(let i=0;i<d;i++){
temp[i] = arr[i]
}
for(let i=d;i<n; i++){

    arr[i-d]  = arr[i];

}
let j=0;                   // can we remove j : from the code :
for(let i= n-d;i<n;i++){
    arr[i] = temp[j];     
    j++;
}
console.log(`Modified array is ${arr}`)

//  from line no 16  to 23 code can we remove j;
// yes we can do :
for(i=n-d;i<n;i++){
    arr[i] = temp[i-(n-d)]
}

// then tc will be O(d) + O(n-d) + O(d)    =  O(n+d)
//sc = O(d)







/*
// Optimal solution 
function Reverse(arr,start,end){
    while(start <=end){
        let temp = arr[start];
        arr[start] = arr[end ];
        arr[end] = temp;
        start++;
        end--;
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let n = arr.length;
let d = 3;

Reverse(arr, 0, d-1);
Reverse(arr, d, n-1);
Reverse(arr, 0, n-1);

console.log(arr);
// Tc is -> O() i think O(2n)

*/

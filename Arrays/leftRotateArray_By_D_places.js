
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
// Tc is -> O()
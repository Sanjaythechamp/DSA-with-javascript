
function Reverse(arr,start,end){
    while(start < end){
        let temp = arr[start];
        arr[start] = arr[end - 1];
        arr[end - 1] = temp;
        start++;
        end--;
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let n = arr.length;
let d = 3;

Reverse(arr, 0, n - d);
Reverse(arr, n - d, n);
Reverse(arr, 0, n);

console.log(arr);

// Brute force method:
// using any sorting algorithm :

// Better solution 

 let arr = [0,1,1,0,1,2,1,2,0,0,0]
 let cnt0 = 0;
 let cnt1 = 0;
 let cnt2 = 0;
 let n = arr.length;

for(let i=0;i<n;i++){
    if(arr[i]===0){
        cnt0++;
    }
    else if(arr[i]===1){
        cnt1++;
    }
    else{
        cnt2++;
    }

}

for(let i=0;i<cnt0;i++){
    arr[i] = 0;
}
for(let i=cnt0;i<cnt0+cnt1;i++){
     arr[i] = 1;
}
for(let i=cnt0+cnt1;i<n;i++){
    arr[i] = 2;
}

for(let i=0;i<n;i++){
    console.log(arr[i]);
}

// tc is O(2n);
//sc is o(1)







// OPTIMAL SOLUTION  : USING DUTCH NATIONAL FLAG ALGORITHM :

/*

function sort(){                // here sort is sort_0s_1s_2s function 

let arr = [0,1,1,0,1,2,1,2,0,0,0]
let n = arr.length;
let low = 0;
let  mid =  0;
let high = n-1

while(mid<=high){
if(arr[mid]===0){
    let temp = arr[mid];
    arr[mid] = arr[low];
    arr[low] = temp;
    low++;
    mid++;
}
else if(arr[mid]===1){
    mid++;
}
else{
    let temp = arr[mid];
    arr[mid]= arr[high];
    arr[high] = temp;
    high--;
}


}
return arr;
}
let res = sort();
console.log(`The modifieda array is ${res}`)



// tc is O(N):

*/
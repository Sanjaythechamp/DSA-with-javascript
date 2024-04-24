
// Brute force Method : 

function rearrange(){
    let arr = [3,1,-2,-5,2,-4]
let positives = [];
let Negatives = [];
let j =0;
let k=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]<0){
        positives[j] = arr[i];
        j++;
    }
    else{
        Negatives[k] = arr[i];
        k++;

    }
}
let l=0;
let m =0;
for(let i=0;i<arr.length;i++){
 if(i%2===0){
    arr[i] = Negatives[l];
    l++;
 }
 else{
    arr[i] = positives[m];
    m++;
 }

}
return arr;
}

let res = rearrange();

console.log(res);


// tc is O(N + N)
// if array contain equal positive and and equal negatives then sc is O(n/2 + n/2) = O(N)
// 

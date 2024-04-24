// -> Question is  if any of the positves and negatives are left add them without altering their order 

//it means we are not sure that positves and negatives are equal. 
// here two scenario occur first is ,  is positve > negative , or negative >positives

function variety2(){
let arr = [3,1,-2,-5,2,-4,7,-4,8,9];

let positive = [];
let negative = [];
let j=0;
let k=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]>0){
        positive[j] = arr[i];
        positive++;
    }
    else{
        negative[k] = arr[i];
        negative++;
    }
}

let positive_size = positive.length;
let negative_size = negative.length;

// here the array we have we know that positves are greater and negatives are lesser:

for(let i=0;i<negative_size;i++){
    arr[i*2] = positive[i];
    arr[i*2+1] = negative[i]
}
let index = positive-1;
for(let i = negative_size;i<positive_size;i++){
           arr[index] = positives[i]
           index++;
 }
return arr;
}

let res = variety2();
console.log(res);

// tc is O(N)
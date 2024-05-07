function insertion(){

let arr = [9,14,15,12,6,8,13];

for(let i=0;i<arr.length;i++){
    
    let j=i;
    while(j>0){
        if(arr[j-1]>arr[j]){
            let temp = arr[j-1];
            arr[j-1] = arr[j];
            arr[j] = temp;
        }
        j--;
    } 
    
}
return arr;
}
let result = insertion();
console.log(result);
function selectionSort(n){
    for(let i=0;i<n;i++){
        
        for(let j=i+1;j<n;j++){
            if(arr[i]>arr[j]){
                 let temp = arr[i];
                 arr[i] = arr[j];
                 arr[j]= temp;
            }
        }
    }
    return arr;

}


let arr = [13,46,24,2,20,9]

  let result = selectionSort(arr.length)
  console.log(`The selection sort is ${result}`)

// TC will be O(n*n)
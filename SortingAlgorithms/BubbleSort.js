function BubbleSort(n){
    for(let i=0;i<n-1;i++){
        let didswap =0;          // here we take didswap = 0 because if inner loop never swap it means it is
    for(let j=0;j<n-i-1;j++){     // already sorted if didswap === 0 occur it means no swap occur at inner loop hence we reduce the the time to O(N)
                                 //  
        if(arr[j]>arr[j+1]){
            // swap
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
            didswap =1;
        }
}
if(didswap === 0){
    console.log("already sorted")
    break;
}
 //console.log("runs")
}

return arr;
}

let arr = [9,6,52,20,4,3];
 let result = BubbleSort(arr.length);
 console.log(`The Bubble Sort value occur is ${result}`);


 // Tc O(n*n)
 
// Brute force 

let arr = [8,5,6,2,11]
let n = arr.length;
let target_sum = 14;
let sum = 0;

for(let i=0;i<n;i++){

    for(let j=i+1;j<n;j++){
    

        sum = arr[i]+arr[j];
        
        if(sum === 14){
            console.log(`The value present in ${i} ${j} indexe`)
            return i,j;

        }
        
        sum = 0;

    }
}

// tc is O(n*n)
// sc is O(1) 

function Insertion_Sort(n,arr){
    for(let i = 0;i<n;i++){         // outer loop 
        
        let j=i;
        while(j>0 && arr[j-1]>arr[j]){     // inner loop
            let temp = arr[j-1];
            arr[j-1] = arr[j];
            arr[j] = temp;
            j--;

        }
    }
return arr;
}

let arr = [9,14,15,12,6,8,13];
let res = Insertion_Sort(arr.length,arr)
console.log(`The Insertion Sort is -> ${res} :`)


/*how this algo works

we have n elements
 so the outer loop run n times so
 [ when i =0 -> inner loop runs 0 times 
 [when i=1-> inner loop runs 1 times ]
 [    when i=2 inner loop runs 3 times]
  and so on ...........
   

  




/* Tc of an insertion sort :

for unsorted Array  : 
the worst case-> O(n*n)
the average case -> O(n*n)
the best case ->O(n) [becuse if array is already sorted it means only outer loop runs not innerloop run]



*/

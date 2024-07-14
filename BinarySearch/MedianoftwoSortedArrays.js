// Brute force method : -> 
function Merge(){
    let arr1 = [2,4,6]
    let arr2 = [1,3,5]
    

   
   let n1 = arr1.length;
   let n2 = arr2.length
  let temp = []

   let  i=0;
   j=0;
 while(i<n1 && j<n2){
        
    if(arr1[i]<=arr2[j]){
        temp.push(arr1[i])
        i++;
    }
    else{
        temp.push(arr2[j])
        j++;

    }



 }

 while(i<n1){
    temp.push(arr1[i])
    i++
 }
 while(j<n2){
    temp.push(arr2[j]);
    j++;
 }

return temp;

}

function median(){

let mergeSortedArray = Merge();

let n = mergeSortedArray.length;
let median;
    if (n % 2 === 0) {
        let mid1 = Math.floor((n - 1) / 2);
        let mid2 = mid1 + 1;
        median = (mergeSortedArray[mid1] + mergeSortedArray[mid2]) / 2;
    } else {
        let mid = Math.floor(n / 2);
        median = mergeSortedArray[mid];
    }

    console.log(median);
}

median()


// Better Solution : 
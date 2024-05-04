function sort(arr,low,high){
    pivot = arr[low];
 let i = low;
 let j = high;


 while(i<j){
       
  while(arr[i]<=pivot && i<=high-1){
    i++;
  }

  while(arr[j]>pivot && j>=low+1){
    j--;
  }
  if(i<j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

  }
  


 }
 let temp = arr[low];
 arr[low] = arr[j];
arr[j] = temp;
 
return j;


}




function Quick_Sort(arr,low,high){
if(low < high){
 let partition_index = sort(arr,low,high);
 sort(arr,low,partition_index-1);
 sort(arr,partition_index+1,high);
  
  


}

}
let arr = [4,6,2,5,7,9,1,6];
let n = arr.length;
let low = 0;
let high = n-1;
  Quick_Sort(arr,low,high);
console.log(arr);

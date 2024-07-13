/*
Given an array ‘arr of integer numbers, ‘ar[i]’ represents the number of pages in the ‘i-th’ book. There are a ‘m’ number of students, and the task is to allocate all the books to the students.
Allocate books in such a way that:

Each student gets at least one book.
Each book should be allocated to only one student.
Book allocation should be in a contiguous manner.


You have to allocate the book to ‘m’ students such that the maximum number of pages assigned to a student is minimum. If the allocation of books is not possible. return -1

*/

function isvalid(arr,max,k){
 let student = 1;
      let sum =0;
    for(let i=0;i<arr.length;i++){
        sum+= arr[i];

        if(sum>max){
            student++;
              sum = arr[i]
        }

    }
if(student>k){
    return -1;
}
else{
    return true;
}

}



function AllocateBooks(){
    
    let  arr = [12,34,67,90];
    let n = 4;
    let k = 2; // given student 
    let low = Math.max(...arr);
    let sum = 0;
    let  ans = 0;

    if(n<k){
        false;
    }
     for(let i=0;i<arr.length;i++){
                sum += arr[i];    
    
    }
 
    let high = sum;

    while(low<=high){
 let mid = Math.floor((low+high)/2);


       if(isvalid(arr,mid,k)===true){
       ans  = mid;
        high= mid-1;
       }
       else{
low  = mid+1
       }


    }
return ans;

}
let res = AllocateBooks();
console.log(res)

// Tc ->O(N) + O(Nlogn *)
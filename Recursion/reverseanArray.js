
//In JavaScript, the length of an array is not fixed and is dynamic. When you create an array, you don't need to specify its length explicitly. Instead, JavaScript automatically adjusts the length of the array as you add or remove elements from it.

/*
function swap(index , end, arr){   // we also take end as = arr.length-1

    if(index >=end ){
        return ;
    }
    else{
        temp = arr[index];
       arr[index] = arr[end];
        arr[end]= temp;
        console.log(` ${arr[index]}`)
        
        index++;
        end--;
   

    }
    

   swap(index,end,arr);
   console.log(`${arr[end]}`)

}

let n = 6;
let arr = [1,2,3,4,5,6]
swap(0,n-1, arr)
*/
function swap(index, end, arr) {
    if (index >= end) {
        return arr; // Return the modified array
    }
    else {
        // Swap elements
        let temp = arr[index];
        arr[index] = arr[end];
        arr[end] = temp;

        // Increment index and decrement end
        index++;
        end--;

        // Recursive call
        
    }
    return swap(index, end, arr);
}

let n = 6;
let arr = [1, 2, 3, 4, 5, 6];
arr = swap(0, n - 1, arr); // Store the result after swapping

console.log(arr); // Output: [6, 5, 4, 3, 2, 1]


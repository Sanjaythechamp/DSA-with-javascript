//Question is find the search element and find the index of that search_element in the array :


let arr = [1,2,3,4,5,6,0];
let search_element = 4;
for(let i=0;i <arr.length; i++){
    if(arr[i] === search_element){
        console.log(i);
        return;
    }


}
return -1;
//Tc = O(N)


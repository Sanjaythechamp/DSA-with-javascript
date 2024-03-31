// example
const str = "Hello";
const unicodeValue = str.charCodeAt(0);
console.log(unicodeValue); // Output: 72  it returns the Unicode value of the character "H", which is 72 according to the ASCII/Unicode table.
Keep in mind that charCodeAt() returns NaN if the given index is out of range or if the specified character cannot be found.

  CODE START FROM HERE   
    
let arr = ['a', 'a', 'b', 'v', 'a'];

let hash = new Array(256).fill(0);    

for (let i = 0; i < arr.length; i++) {   
    let charCode = arr[i].charCodeAt();
    hash[charCode]++;
}

// Example of querying for a specific character
let searchElement = 'a'; // Example search element
let searchCharCode = searchElement.charCodeAt(0); // Convert searchElement to its ASCII value
console.log(`The frequency of search element '${searchElement}' is ${hash[searchCharCode]}`);



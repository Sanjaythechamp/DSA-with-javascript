
// important  JavaScript allows arrays to hold elements of mixed types



//In JavaScript, arrays are a specific type of object with their own set of behaviors, while objects are collections of key-value pairs where the keys are strings (or symbols) and the values can be any data type.




function palindrome(word,start,end){

if(start>=end){
    return word;
}
else{
    let temp = word[start];
    word[start] = word[end];
    word[end] = temp;
   

}
return palindrome(word,start+1,end-1);

}

let words = ['a','n','n','n','a']; // it is object 

 let  result = palindrome([...words],0,words.length-1)
  // here[...word ] here we making shallow copy of the words variable
                                                       // because if we not create shallow copy, then its original reference go and original value will change so due to this we take shallow copy  

 let originalString = words.join(' '); // join convert _>> to string a n n n a 
 let reversedString  = result.join(' ');                              // a n n n a

 if(originalString === reversedString){
    console.log("palindrome")
 }
 else{
    console.log("Not an palindrome")
 }

 console.log(`${originalString}`);

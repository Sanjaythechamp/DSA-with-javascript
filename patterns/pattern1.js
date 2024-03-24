
// notes : The difference between process.stdout.write("*") and
//console.log("*") is that process.stdout.write() does not automatically 
// append a newline character (\n) at the end, while console.log() does.

//So, when you use process.stdout.write("*"), the stars will be printed 
//without any newline characters, allowing them to appear on the same line.



/*


*****
*****
*****
*****
*****





*/


function print(n){
    for(let i=0;i<n;i++){
        for( let j=0;j<n;j++){
            process.stdout.write("*")           // it will not jump directly to new line 
            
        }

        console.log(""); // due to this we move to next line
     
    }

}
print(5)




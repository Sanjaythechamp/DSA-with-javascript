/*



*
**
***
****
*****
***** 
**** 
*** 
** 
* 






*/








function printupper(n){

    for(let i=0;i<n;i++){
        for(let j=0;j<=i;j++){
            process.stdout.write("*")
        }
        console.log("")
    }
    printlower(n)

}
printupper(5)

function printlower(n){
    for(let i=0;i<n;i++){
        for(let j=0;j<n-i;j++){
            process.stdout.write("*")
        }
        console.log(" ");

    }

}
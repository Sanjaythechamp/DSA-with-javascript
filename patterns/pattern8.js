/*


*********
 ******* 
  *****  
   ***   
    *    





*/


function printstar(n){
             
       for(let i =0;i<n;i++){
  

        // for space
        for(let j=0;j<i;j++){
            process.stdout.write(" ")
        }
        
        // for star
        for(let k=0;  k<2*n-(2*i+1);k++ ){
            process.stdout.write("*")
        }


         // space
        for(let l=0;l<i;l++){
            process.stdout.write(" ")
        }
           console.log("")

       }

}

printstar(5)
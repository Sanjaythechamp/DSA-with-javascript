/*

    *    
   ***   
  *****  
 ******* 
*********


*/




function print(n){     
    for(let i =0;i<n;i++){


     // for space 

     for(let j =0; j<n-i-1;j++){
        process.stdout.write(" ")
     }

     // for star

     for( let k=0;k<2*i+1;k++){
        process.stdout.write("*")
     }


     for(let l =0; l<n-i-1;l++){
        process.stdout.write(" ")
     }
     console.log("")

    

  }
}
  
print(5)
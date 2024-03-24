/*


12345
1234
123
12
1


*/
function print(n){

    for(let i =0;i<n;i++){
      for(let j=0;j<n-i;j++){
        process.stdout.write(`${j+1}`)
      }
      console.log("");
    }
  
  }
  print(5)


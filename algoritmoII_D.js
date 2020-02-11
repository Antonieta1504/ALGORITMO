function printSum(x) {
  var sum = 0;
   for(var i=0; i<=x; i++){
     console.log(i)
     sum=sum+i
   }
    
  return sum
  }
   
y = printSum(255)
console.log(y)
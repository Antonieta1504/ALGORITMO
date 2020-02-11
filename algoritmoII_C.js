function printUpTo(x){
  if (x<0){
    console.log("numero negativo")
    return false;
  }
  
   for(var i=1; i<=x; i++) {
    console.log(i)
    
 }
}
  
printUpTo(1000); 
y = printUpTo(-100); 
console.log(y); 
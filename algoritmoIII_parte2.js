Ejercicio N�1:

function printAverage(x){
   sum = 0;
   for(var i=0; i<x.length; i++){
     sum+=x[i];
   }
  sum=sum/x.length;{
    return sum;
  }
}
y = printAverage([1,2,3]);
console.log(y); // should log 2
  
y = printAverage([2,5,8]);
console.log(y); // should log 5

--------------------------------------------------------------------
--------------------------------------------------------------------
Ejercicio N�2:

function returnOddArray(){
   x=[];
   for( var i=1; i<=255; i++){
     if ( i % 2!== 0 ) {
      x.push(i);
      } 
   }
     return x;
}
y = returnOddArray();
console.log(y); 

--------------------------------------------------------------------
--------------------------------------------------------------------
Ejercicio N�3:

function squareValue(x){
  for(var i=0; i<x.length; i++){
    x[i]=x[i]*x[i];
    }
    return x;
}
y = squareValue([1,2,3]);
console.log(y); // should log [1,4,9]
  
y = squareValue([2,5,8]);
console.log(y); // should log [4,25,64]
function reset(x){
  for(var i=0; i<x.length; i++){
    if(x[i]<0){
      x[i]=0;
    }
    
  }
  return x;
}

z = reset([1,2,-1,-3]);
console.log(z);

--------------------------------------------------

function moveradelante(x){
    var temp=[];  
      for(var i=1; i<x.length; i++){
        temp[i-1]=x[i];
       }
  
   x=temp
   x.push(0)
   return x; 
  }
  
   arr= moveradelante([1,2,3]); 
   console.log (arr)

   --------------------------------------------------------

 a)  function returnReverso(x){
    for(var i=0; i<=x.length; i++){
     x.reverse()
    } 
 return x
}


arr= returnReverso([1,2,3,4,5,6]); 
console.log (arr)

b) function returnReverso(x){
    var temp=[];  
    
      for(var i=x.length-1; i>=0; i--){
          temp.push(x[i]);
        }
            return temp;
       } 
  
   arr= returnReverso([1,2,3,4,5,6]); 
   console.log (arr)

------------------------------------------------------------------

function repetirValores(x){
    var temp=[];  
    
      for(var i=0; i<x.length; i++){
          temp.push(x[i])
          temp.push(x[i]);
        }
            return temp;
       } 
  
   arr= repetirValores([4,"Ulysses", 42, false,89]); 
   console.log (arr)
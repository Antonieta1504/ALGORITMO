/function a(arr,y){
  var count= 0;    
  for(var i=0; i<arr.length ; i++){
    if(arr[i]>y){
       console.log(arr[i]);
       count=count+1;
    }
  }
  return count;
}
  
z=a([1,2,3,4,5,6,7,10],3);
console.log(z)
----------------------------------------------------------------
---------------------------------------------------------------------

function a(arr){
  var max= arr[0];
  var min= arr[0];
  var prom= 0;
  var sum = 0;
  for(var i=0; i<arr.length ; i++){
    if(arr[i]>max){
      max=arr[i];
    }
    if(arr[i]<min){
      min= arr[i];
    }
    sum=(arr[i]+sum);
  }
  prom=sum/arr.length;
  console.log(max);
  console.log(min);
  console.log(prom);

}
 z=a([1,3,5,7,10]);
----------------------------------------------------------------
---------------------------------------------------------------------
 function a(arr){
  var arr2=[];
  for(var i=0; i<arr.length ; i++){
      if(arr[i]>=0){
        arr2[i]=arr[i];
      }
      else{
        arr2[i]="dojo"
        }
       }
    return arr2;
  }
 z=a([1,2,-3,-5,5]);
console.log(z);
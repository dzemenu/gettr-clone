function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    
        var result = [];
        var sum=A.reduce((a,b)=>a+b);
        var min=sum;
        var top=0
        for(var i=0;i<A.length;i++){
         if(min>(sum-top-A[i]))
         {
  
         }
        }
    
    
    return result;
}
console.log(solution([3,1,2,4,3]))
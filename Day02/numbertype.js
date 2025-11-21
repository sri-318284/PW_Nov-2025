function numberType(number){

      if(number>0){

       return "Positive";
        
    }else if(number<0){

          return "Negative";
    }else{
           return "Neutral";
    }
}

console.log(numberType(0));

console.log(numberType(12));

console.log(numberType(-21));


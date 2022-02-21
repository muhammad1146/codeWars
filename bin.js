function checknumber(number) {
  let isPrime=true;
  let isEven = false, isOdd=false;
(number%2===1)?(isOdd=true):(isEven=true)
  
if(isEven){
  console.log('the number is EVEN');
  console.log('the number is not ODD');

}else{
  console.log('the number is EVEN');
  console.log('the number is not ODD');
}
if(number>1)
  {
      for(let i=2;i<number;i++){
        if(number % i===0){  //the number which is not divisible by all numbers from 2 to that number is prime number
          isPrime=false;
          break;
        }
      }
      if(isPrime)
      {
        console.log("the number is PRIME number...")
      }
      else
      {
        console.log("the number NOT a prime number...")
      }
  }
  else
  {
    console.log("numbers 1 and below are not prime number...")
  }
}

checknumber(30);
//vQodeE22E&
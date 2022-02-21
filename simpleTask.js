function checknumber(number) {
  let isPrime=true;
if(number%2===0){
  console.log("number is EVEN");
  console.log("number is not ODD");
  console.log("number is NOT a prime number");
}else{
  console.log("number is ODD");
  console.log("number is not EVEN");
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
  
}

checknumber(30);
//vQodeE22E&
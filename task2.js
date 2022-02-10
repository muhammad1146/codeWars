// function rowSumOddNumbers(n) {
// 	let oddNumbers=[]
//  for(let i=1;i<=(n*n+n-1);i+=2){
//     oddNumbers.push(i);
//   }
// return oddNumbers.slice(-n).reduce((acc,val)=>acc+val);
// }

function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}
console.log(rowSumOddNumbers(4));

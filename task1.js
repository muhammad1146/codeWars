// function duplicateEncode(word){
//   let newString = '';
//   word = word.toLowerCase(); //converting to lowercase
//   for ( let i=0; i<word.length;i++){ //iterating the string
//     let count = 0;
//     count = word.split(word.charAt(i)).length-1; //counting the repetation of character
//     if(count>1){  //character found
//       newString = newString+")"; 
//     }else{
//       newString = newString+ "(";
//     }
//   }
// return newString;
// }
function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
     .map( function (a, i, w) {
       return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
     })
     .join('');
}
console.log(duplicateEncode('(( @'));





let array = [1,2,2,4,3,5,6,7,4]

let array1 = [1,4]

function substract (arr,arr1){
 return arr.filter(item=>!arr1.includes(item))

}
console.log(substract([1,2,2,2,3],[2]));
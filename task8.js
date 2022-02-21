let words = ['crazer', 'carer', 'racar', 'caers', 'racer']
function anagrams(word, words) {
  return words.filter((item,i,arr)=>{
    return word.split('').sort().toString()===item.split('').sort().toString()
  })

}


console.log(anagrams('racer',words))
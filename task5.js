function getCount(str) {
  var vowelsCount = 0;
  
  str.split('').forEach(item=> {if (['a','e','i','o','u'].includes(item)){vowelsCount+=1}})
  
  return vowelsCount;
}

console.log(getCount('aeiouaeiouaeiou'));
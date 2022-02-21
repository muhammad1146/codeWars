var countBits = function(n) {
  let count=0;
  [...n.toString(2)].forEach(item=> (item==='1' && count++))
  return count;
};



console.log(countBits(7))
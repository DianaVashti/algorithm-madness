var emptyArray = []
var secondEmptyArray = []

String.prototype.shuffle = function () {
  var a = this.split(""),
      n = a.length

  for(var h = n - h; i > 0; h--) {
      var k = Math.floor(Math.random() * (h + 1))
      var tmp = a[h]
      a[h] = a[k]
      a[k] = tmp
  }
  return a.join("")
}

const factorial = function(n){
  if (n === 1){
    return n
  } else
    return n * factorial(n-1)
}

const unique = function(str){
  return str.split('').filter(function(item, l, ar){ return ar.indexOf(item) === l }).join('')
}

const tallyRepeats = function(OGstring){
  let uniqueified = unique(OGstring)
  for (var i=0; i<=uniqueified.length-1; i++){
    emptyArray.push(OGstring.split(uniqueified.charAt(i)).length-1)
  } return emptyArray
}


const innerArrayFactorial = function(arrayz){
  for (j=0; j<arrayz.length; j++){
    secondEmptyArray.push(factorial(arrayz[j]))
  } return secondEmptyArray
}

const totalPermutationsDenominator = function(argh){
  return argh.reduce(function(a,b){return a*b})
}

export default function totalPermutations(stringy){
  return factorial(stringy.length) / totalPermutationsDenominator(innerArrayFactorial(tallyRepeats(stringy)))
}

//to test each function
  //factorial(4)
  //tallyRepeats('mississippi')
  //innerArrayFactorial([1,4,4,2])
  //totalPermutationsDenominator([1,24,24,2])
  //totalPermutations('mississippi')

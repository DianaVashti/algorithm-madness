var finalArr = []
var emptyArray = []
var secondEmptyArray = []

//shuffle funx
String.prototype.shuffle = function () {
  var a = this.split(""),
      n = a.length

  for(var i = n - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1))
      var tmp = a[i]
      a[i] = a[j]
      a[j] = tmp
  }
  return a.join("")
}
//factorial funx
const factorial = function(n){
  if (n === 1){
    return n
  } else
    return n * factorial(n-1)
}
//returns unique letters of string once
const unique = function(str){
  return str.split('').filter(function(item, i, ar){ return ar.indexOf(item) === i }).join('')
}
//returns array of numbers; correspond to how many of each unique letter
const tallyRepeats = function(OGstring){
  let uniqueified = unique(OGstring)
  for (var i=0; i<=uniqueified.length-1; i++){
    emptyArray.push(OGstring.split(uniqueified.charAt(i)).length-1)
  } return emptyArray
}
//takes the tallyRepeats array and factorializes each index, returns array
const innerArrayFactorial = function(arrayz){
  for (j=0; j<arrayz.length; j++){
    secondEmptyArray.push(factorial(arrayz[j]))
  } return secondEmptyArray
}
//multiples all the the indexes of innerArrayFactorial returns single number
const totalPermutationsDenominator = function(argh){
  return argh.reduce(function(a,b){return a*b})
}
//divides original string.length by the output of totalPermutationsDenominator, this returns the total number of permutations possible for a given string using all the above helper funx
const totalPermutations = function(stringy){
  return factorial(stringy.length) / totalPermutationsDenominator(innerArrayFactorial(tallyRepeats(stringy)))
}
//this takes the totalPermutations and recursively build an array of all the possible permutations of a string, works on words with no repeat letters only?
var shuffleFactorial = function(strang) {
  //terminal case
  if ( finalArr.length === totalPermutations(strang) ){
    return finalArr
  } else { //recursive call
    if ( finalArr.includes(strang) === true ){
      return shuffleFactorial(strang.shuffle())
    } else if (finalArr.includes(strang) === false ){
      finalArr.push(strang)
      return shuffleFactorial(strang.shuffle())
    }
  }
}

//to test each function
  //factorial(4)
  //unique('mississippi')
  //tallyRepeats('mississippi')
  //innerArrayFactorial([1,4,4,2])
  //totalPermutationsDenominator([1,24,24,2])
  //totalPermutations('mississippi')
  //shuffleFactorial('dawg')

var finalArr = []
var emptyArray = []
var secondEmptyArray = []

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

const factorial = function(n){
  if (n === 1){
    return n
  } else
    return n * factorial(n-1)
}

const unique = function(str){
  return str.split('').filter(function(item, i, ar){ return ar.indexOf(item) === i }).join('')
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

const totalPermutations = function(stringy){
  return factorial(stringy.length) / totalPermutationsDenominator(innerArrayFactorial(tallyRepeats(stringy)))
}

export default function shuffleFactorial(strang) {
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
  //tallyRepeats('mississippi')
  //innerArrayFactorial([1,4,4,2])
  //totalPermutationsDenominator([1,24,24,2])
  //totalPermutations('mississippi')





// this works but call stack is really stressed out, but freezes when there's a duplicate letter? Not sure why
// var finalArr = []
// var emptyArray = []
// var secondEmptyArray = []
//
// String.prototype.shuffle = function () {
//   var a = this.split(""),
//       n = a.length
//
//   for(var i = n - 1; i > 0; i--) {
//       var j = Math.floor(Math.random() * (i + 1))
//       var tmp = a[i]
//       a[i] = a[j]
//       a[j] = tmp
//   }
//   return a.join("")
// }
//
// const factorial = function(n){
//   if (n < 0){
//     return "Please enter a positive integer"
//   }
//
//   if (n === 1){
//     return n
//   } else
//     return n * factorial(n-1)
// }
//
// const unique = function(str){
//   return str.split('').filter(function(item, i, ar){ return ar.indexOf(item) === i }).join('')
// }
//
// const tallyRepeats = function(OGstring){
//   let uniqueified = unique(OGstring)
//   for (var i=0; i<=uniqueified.length-1; i++){
//     emptyArray.push(OGstring.split(uniqueified.charAt(i)).length-1)
//   } return emptyArray
// }
//
// const innerArrayFactorial = function(arrayz){
//   for (j=0; j<arrayz.length; j++){
//     secondEmptyArray.push(factorial(arrayz[j]))
//   } return secondEmptyArray
// }
//
// const totalPermutationsDenominator = function(argh){
//   return argh.reduce(function(a,b){return a*b;})
// }
//
// const totalPermutations = function(stringy){
//
//   return factorial(stringy.length) / totalPermutationsDenominator(innerArrayFactorial(tallyRepeats(stringy)))
// }
//
// const shuffleFactorial = function(strang) {
//   //terminal case
//   if ( finalArr.length === totalPermutations(strang) ){
//     return finalArr
//   } else { //recursive call
//     if ( finalArr.includes(strang) === true ){
//       return shuffleFactorial(strang.shuffle())
//     } else if (finalArr.includes(strang) === false ){
//       finalArr.push(strang)
//       return shuffleFactorial(strang.shuffle())
//     }
//   }
// }
//
// console.log(shuffleFactorial('dawgo').length)

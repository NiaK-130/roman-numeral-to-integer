function romanNumeral(string) {
 
  const romans = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000
  };

  let result = 0;

  for (let i = 0; i < string.length; i++){

    const curr = romans[string[i]];
    const next = romans[string[i+1]]

    if (curr < next){
      result = result + next - curr;
      i++
    } else{
      result = result + curr
    }

  }
  return result; 
      
}





if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 1");
  console.log(romanNumeral('I'));

  console.log("");

  console.log("Expecting: 9");
  console.log(romanNumeral('IX'));

  console.log("");

  console.log("Expecting: 409");
  console.log(romanNumeral('CDIX'));
}

module.exports = romanNumeral;

// Please add your pseudocode to this file
// And a written explanation of your solution

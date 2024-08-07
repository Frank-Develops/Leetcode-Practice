var plusOne = function(digits) {
    let string = digits.join("");
    let num = BigInt(string) + 1n;
    return num.toString().split("");
  };
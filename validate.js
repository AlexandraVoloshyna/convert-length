export function validate(value) {
    const num = parseFloat(value)
    if (!Number.isSafeInteger(num) || num <= 0 ) return console.log("The number is not valid.");
  }
  
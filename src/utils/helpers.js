export const isPrime = (num) => {
  if (num < 2) return false
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false
  }

  return true
}

export const isPerfect = (num) => {
  let sum = 1
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) sum += i
  }
  return sum === Number(num) && Number(num) !== 0
}

export const isArmstrong = (num) => {
  const digits = num.toString().split('').map(Number)

  const power = digits.length
  const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0)
  return sum === Number(num)
}

export const isEven = (num) => {
  return num % 2 === 0
}

export const getDigitSum = (num) => {
  return num
    .toString()
    .split('')
    .reduce((sum, digit) => sum + parseInt(digit), 0)
}

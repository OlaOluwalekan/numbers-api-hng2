import axios from 'axios'
import { StatusCodes } from 'http-status-codes'
import {
  getDigitSum,
  isArmstrong,
  isEven,
  isPerfect,
  isPrime,
} from '../utils/helpers.js'

export const getNumberFacts = async (req, res) => {
  const number = req.query.number

  if (!number || isNaN(number) || !Number.isInteger(Number(number))) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ number: number || 'undefined', error: true })
  }

  const fact = await axios.get(`http://numbersapi.com/${number}`)
  const properties = []
  const is_prime = isPrime(number)
  const is_perfect = isPerfect(number)
  if (isArmstrong(number)) {
    properties.push('armstrong')
  }
  if (is_perfect) {
    properties.push('perfect')
  }
  if (is_prime) {
    properties.push('prime')
  }
  if (isEven(number)) {
    properties.push('even')
  } else {
    properties.push('odd')
  }
  const digit_sum = getDigitSum(number)
  res.status(StatusCodes.OK).json({
    number,
    is_prime,
    is_perfect,
    properties,
    digit_sum,
    fun_fact: fact.data,
  })
}

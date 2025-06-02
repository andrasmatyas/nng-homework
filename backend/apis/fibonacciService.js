import fibonacci from '../math/fibonacci.js'
import log from '../logger.js'
async function fibonacciService(req, res) {
  if (!req.body.fibNumber || req.body.fibNumber < 0) {
    res.sendStatus(400)
    return log(`Bad request: ${JSON.stringify(req.body)}`, './errors.txt')
  }
  let fibResult = await fibonacci.getFibonacci(req.body.fibNumber)
  res.json({ fibResult: fibResult })
  log(`${req.body.fibNumber}th Fibonacci number calculated: ${fibResult}`)
}
export default fibonacciService

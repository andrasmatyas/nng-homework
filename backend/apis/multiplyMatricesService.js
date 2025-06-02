import multiplyMatrices from '../math/multiplyMatrices.js'
import log from '../logger.js'

async function multiplyMatricesService(req, res) {
  if (
    !req.body.matrix1 ||
    !req.body.matrix2 ||
    !isJsonString(req.body.matrix1) ||
    !isJsonString(req.body.matrix2)
  ) {
    res.sendStatus(400)
    return log(`Bad request: ${JSON.stringify(req.body)}`, './errors.txt')
  }
  const matrix1 = JSON.parse(req.body.matrix1)
  const matrix2 = JSON.parse(req.body.matrix2)
  if (!isValidMatix(matrix1)) {
    let message = 'The First Matrix is not a valid matrix!'
    res.json({ error: message })
    return log(message, './errors.txt')
  }
  if (!isValidMatix(matrix2)) {
    let message = 'The Second Matrix is not a valid matrix!'
    res.json({ error: message })
    return log(message, './errors.txt')
  }
  let row1 = matrix1.length
  let column1 = matrix1[0].length
  let row2 = matrix2.length
  let column2 = matrix2[0].length
  if (column1 !== row2) {
    let message =
      'The number of columns in the First Matrix must be equal to the number of rows in the Second Matrix!'
    res.json({ error: message })
    return log(message, './errors.txt')
  }
  const resultMatrix = await multiplyMatrices(
    matrix1,
    row1,
    column1,
    matrix2,
    row2,
    column2
  )
  res.json(resultMatrix)
  log('The matrix multiplication has been successfull!')
}

function isJsonString(str) {
  try {
    JSON.parse(str)
  } catch (e) {
    return false
  }
  return true
}
function isValidMatix(matrix) {
  try {
    matrix[0][0]
  } catch (e) {
    return false
  }
  if (matrix[0][0] === undefined) return false
  let isEqualLength = true
  const rowLength = matrix[0].length
  matrix.forEach((row) => {
    if (row.length !== rowLength) isEqualLength = false
  })
  if (!isEqualLength) return false
  return true
}
export default multiplyMatricesService

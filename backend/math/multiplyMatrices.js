function multiplyMatrices(matrix1, row1, column1, matrix2, row2, column2) {
  let res = new Array(row1)
  for (let i = 0; i < row1; i++) res[i] = new Array(column2)

  for (let i = 0; i < row1; i++) {
    for (let j = 0; j < column2; j++) {
      res[i][j] = 0
      for (let x = 0; x < column1; x++) {
        res[i][j] += matrix1[i][x] * matrix2[x][j]
      }
    }
  }
  return res
}

export default multiplyMatrices

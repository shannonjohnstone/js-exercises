/**
 * Chessboard
 * 
 * Create a program that creates a string that parse an 8x8 grid,
 * in each position of the grid should be a space of a #
 * 
 * Every first row to start with a space
 */



const createChessboard = (limit) => {
  let strOutput = ""

  for (let yAxisIndex = 1; yAxisIndex <= limit; yAxisIndex++) {
    for (let xAxisIndex = 1; xAxisIndex <= limit; xAxisIndex++) {
      let token = " "
      const isOddYAxis = yAxisIndex % 2 !== 0
      const isOddXAxis = xAxisIndex % 2 !== 0
     
      if ((isOddYAxis && isOddXAxis) || (!isOddYAxis && !isOddXAxis)) {
        token = " "
      } else {
        token = "#"
      }
      
      strOutput += token
     }

     strOutput += "\n"
  }

  return strOutput
}

const createChessboardRecursive = (limit) => {

  const createYAxis = (limit, index = 1) => {
    let strOutput = ""

    if(limit === index) return strOutput

    const handleYAxis = () => createYAxis(limit, index + 1)

    return strOutput += handleRowItem(index, limit, handleYAxis)
  }

  const handleRowItem = (outerIndex, limit, handleYAxis, index = 1) => {
    let isOddRow = outerIndex % 2 !== 0 && index === 1
    
    let startSymbol = isOddRow ? " " : ""
    
    let strOutput = startSymbol

    const symbol = index < limit ? "# " : "#"

    if(limit === index) return strOutput + "\n" + handleYAxis()
    
    return strOutput += symbol + handleRowItem(outerIndex, limit, handleYAxis, index + 1)
  }

  return createYAxis(limit)
}

const chessboard8 = createChessboard(8)
const chessboard16 = createChessboardRecursive(16)

console.log(chessboard8)
console.log(chessboard16)
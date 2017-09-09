
function getStringToLowerCaseAndNoSpaces (string) {
  if (string) {
    return string.replace(/\s/g, '')
  }
  return null
}
function arrayToObjectForSort (array) {
  let result = {}
  let order = {}
  let splitResult = []
  array.forEach(sort => {
    splitResult = sort.split(' ')
    order = getStringToLowerCaseAndNoSpaces(splitResult[1]) || 'asc'
    order = order === 'asc' ? 1 : -1
    result[getStringToLowerCaseAndNoSpaces(splitResult[0])] = order
  })
  return result
}

export const paginate = {
  sort (value) {
    if (!value) {
      return {}
    }
    if (typeof value === 'string') {
      const selectArray = value.split(',')
      return arrayToObjectForSort(selectArray)
    }
    if (value instanceof Array) {
      return arrayToObjectForSort(value)
    }
    return {}
  }
}

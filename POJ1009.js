const data = {
  width: 7,
  pairs: [
    {value: 15, length: 4},
    {value: 100, length: 15},
    {value: 25, length: 2},
    {value: 175, length: 2},
    {value: 25, length: 5},
    {value: 175, length: 2},
    {value: 25, length: 5}
  ]
}

const getRound = (n, width, height, arr) => {
  const i = Math.floor(n / width)
  const j = n % width
  const num = arr[n]

  const top = (i - 1 < 0) ? null : arr[(i - 1) * width + j]
  const right = (j + 1 >= width) ? null : arr[i * width + (j + 1)]
  const bottom = (i + 1 >= height) ? null : arr[(i + 1) * width + j]
  const left = (j - 1 < 0) ? null : arr[i * width + (j - 1)]

  let result = 0

  if (top !== null) {
    result = Math.max(result, Math.abs(num - top))
  }
  if (right !== null) {
    result = Math.max(result, Math.abs(num - right))
  }
  if (bottom !== null) {
    result = Math.max(result, Math.abs(num - bottom))
  }
  if (left !== null) {
    result = Math.max(result, Math.abs(num - left))
  }

  console.info(`行号: ${i}, 列号: ${j}, top: ${top}, right: ${right}, bottom: ${bottom}, left: ${left}, result: ${result}`)
}

const main = () => {
  const arr = []
  const width = data.width

  data.pairs.forEach(pair => {
    arr.push(...Array.from({length: pair.length}, () => pair.value))
  })
  const height = arr.length / width

  arr.forEach((_, index) => getRound(index, width, height, arr))

  console.log(arr)
}

main()

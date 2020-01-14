const arr = [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]

const main = (n) => {
  if (n > arr.length) {
    return 0
  }
  const dp = arr[n - 1]

  for (let i = n - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      const subArr = arr[i]

      dp[j] = subArr[j] + Math.max(dp[j], dp[j + 1])
    }
  }
  return dp[0]
}

console.log(main(5))

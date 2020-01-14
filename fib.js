// const fib = (n) => {
//   if (n <= 2) {
//     return 1
//   }
//   return fib(n - 1) + fib(n - 2)
// }

const fib = (n) => {
  const dp = []
  const helper = (n) => {
    if (dp[n] !== undefined) {
      return dp[n]
    }
    if (n <= 2) {
      return 1
    }
    dp[n] = helper(n - 1) + helper(n - 2)
    return dp[n]
  }

  return helper(n)
}

const fib2 = (n) => {
  const dp = []

  const helper = (n) => {
    if (n <= 2) {
      return 1
    }
    return dp[n - 1] + dp[n - 2]
  }

  for (let i = 1; i <= n; i++) {
    dp[i] = helper(i)
  }

  return dp[n]
}

const beginTime = Date.now()

console.log(fib(1000))

console.info(`耗时：${Date.now() - beginTime}ms`)


const beginTime2 = Date.now()

console.log(fib2(1000))

console.info(`耗时：${Date.now() - beginTime2}ms`)

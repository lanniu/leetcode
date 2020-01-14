const faceValues = [474, 83, 404, 3]

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = function (coins, amount) {
  const dp = []
  const myCoins = coins.sort((a, b) => a - b)

  dp[0] = 0
  for (let i = 1; i <= amount; i++) {
    let result = Infinity

    for (let j of myCoins) {
      if (i < j) {
        break
      }
      result = Math.min(result, dp[i - j] + 1)
    }
    dp[i] = result
  }

  return dp[amount] === Infinity ? -1 : dp[amount]
}

const beginTime2 = Date.now()

console.log(coinChange(faceValues, 264))

console.info(`耗时：${Date.now() - beginTime2}ms`)

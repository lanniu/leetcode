const nums = [1, 5, 11, 5]

const canPartition = (nums) => {
  const sum = nums.reduce((a, b) => a + b, 0)

  if (sum % 2 !== 0) {
    return false
  }
  const average = sum / 2
  const dp = []

  for (let i = 0; i <= nums.length; i++) {
    dp[i] = []
    for (let j = 0; j <= average; j++) {
      dp[i][j] = false
    }
  }
  for (let i = 1; i <= nums.length; i++) {
    const num = nums[i - 1]

    for (let j = 0; j <= average; j++) {
      if (num === j) {
        dp[i][j] = true
      } else if (j >= num) {
        dp[i][j] = dp[i - 1][j - num]
      }
      dp[i][j] = dp[i - 1][j] || dp[i][j]
    }
  }
  return dp[nums.length][average]
}

console.log(canPartition(nums))

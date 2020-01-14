const obj = [
  {id: 1, value: 1, weight: 1},
  {id: 2, value: 6, weight: 2},
  {id: 3, value: 18, weight: 5},
  {id: 4, value: 22, weight: 6},
  {id: 5, value: 28, weight: 7}
]

// 0 - 1 背包问题

const knapsackProblem = (obj, weight) => {
  const dp = []

  dp[0] = {value: 0, objId: []}
  for (let i = 1; i <= weight; i++) {
    let result = {value: 0, objId: []}

    for (const j of obj) {
      if (j.weight <= i) {
        const compare = dp[i - j.weight]

        let tmpValue = compare.value
        let isAddSelf = false

        if (!compare.objId.includes(j.id)) {
          tmpValue += j.value
          isAddSelf = true
        }
        if (tmpValue > result.value) {
          result.value = tmpValue
          result.objId = [...compare.objId]
          if (isAddSelf) {
            result.objId.push(j.id)
          }
        }
      }
    }
    dp[i] = result
  }

  return dp[weight]
}

console.log(knapsackProblem(obj, 12))

// const isMatch = (s, p) => {
//   const memo = []
//
//   const dp = (i, j) => {
//     if (memo[i] === undefined) {
//       memo[i] = []
//     }
//     if (memo[i][j] !== undefined) {
//       return memo[i][j]
//     }
//     let ans
//
//     if (j === p.length) {
//       ans = i === s.length
//     } else {
//       const first_match = i < s.length && (Object.is(s[i], p[j]) || Object.is('.', p[j]))
//
//       if (j + 1 < p.length && Object.is('*', p[j + 1])) {
//         ans = (first_match && dp(i + 1, j)) || dp(i, j + 2)
//       } else {
//         ans = first_match && dp(i + 1, j + 1)
//       }
//     }
//     memo[i][j] = ans
//     return ans
//   }
//   return dp(0, 0)
// }

const isMatch = (s, p) => {
  let i = 0
  let j = 0
  let iStar = -1
  let jStar = -1

  const m = s.length
  const n = p.length

  while (i < m) {
    if (j < n && (s[i] === p[j] || p[j] === '.')) {
      ++i
      ++j
    } else if (j < n && p[j] === '*') {
      iStar = i
      jStar = j++
    } else if (iStar >= 0) {
      i = ++iStar
      j = jStar + 1
    } else return false
  }
  while (j < n && p[j] === '*') ++j
  return j === n
}

// console.log(isMatch('aa', 'a*'))

// console.log(isMatch('aabb', 'a*b*'))
// console.log(isMatch('aaa', 'ab*a*c*a'))
// console.log(isMatch('aaa', 'a*a'))
// console.log(isMatch('ab', '.*c'))
// console.log(isMatch('aaa', 'aaaa'))

// console.log(isMatch('aa', 'a'))
// console.log(isMatch('aa', 'a*'))
// console.log(isMatch('ab', '.*'))
console.log(isMatch('aab', 'c*a*b'))
// console.log(isMatch('mississippi', 'mis*is*p*.'))



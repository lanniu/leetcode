const findMedianSortedArrays = function (nums1, nums2) {
  const merge = (num1, num2) => {
    let num1Index = 0
    let num2Index = 0
    const arr = []
    const num1Length = num1.length
    const num2Length = num2.length

    while (num1Index < num1Length && num2Index < num2Length) {
      const value1 = num1[num1Index]
      const value2 = num2[num2Index]

      if (value1 <= value2) {
        arr.push(value1)
        num1Index++
      } else {
        arr.push(value2)
        num2Index++
      }
    }
    if (num1Index < num1Length) {
      arr.push(...num1.slice(num1Index))
    }
    if (num2Index < num2Length) {
      arr.push(...num2.slice(num2Index))
    }
    return arr
  }
  const newArr = merge(nums1, nums2)
  const tmpIndex = newArr.length / 2

  if (Object.is(0, newArr.length % 2)) {
    return (newArr[tmpIndex] + newArr[tmpIndex - 1]) / 2
  }
  return newArr[Math.floor(tmpIndex)]
}

const nums1 = [1, 3]
const nums2 = [2]

console.info(findMedianSortedArrays(nums1, nums2))

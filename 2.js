function ListNode(val) {
  this.val = val
  this.next = null
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  const run = (l1, l2, add, parent) => {
    const mL1 = l1 || new ListNode()
    const mL2 = l2 || new ListNode()

    const value1 = Number(mL1.val) || 0
    const value2 = Number(mL2.val) || 0

    let value = value1 + value2 + add
    let mAdd = 0

    if (value >= 10) {
      mAdd = 1
      value -= 10
    }
    const newNode = new ListNode(value)

    if (parent) {
      parent.next = newNode
    }
    if (mL1.next !== null || mL2.next !== null || mAdd !== 0) {
      run(mL1.next, mL2.next, mAdd, newNode)
    }

    return newNode
  }

  return run(l1, l2, 0)
}

const nodeVal1_2 = new ListNode(2)
const nodeVal1_4 = new ListNode(4)
const nodeVal1_3 = new ListNode(3)

const nodeVal2_5 = new ListNode(5)
const nodeVal2_6 = new ListNode(6)
const nodeVal2_4 = new ListNode(4)

nodeVal1_2.next = nodeVal1_4
nodeVal1_4.next = nodeVal1_3

nodeVal2_5.next = nodeVal2_6
nodeVal2_6.next = nodeVal2_4

console.info(addTwoNumbers(nodeVal1_2, nodeVal2_5))

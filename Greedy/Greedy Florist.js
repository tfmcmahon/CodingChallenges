//https://www.hackerrank.com/challenges/greedy-florist/problem

function getMinimumCost(k, c) {
  c.sort((a, b) => b - a)
  let minCost = 0
  let mult = 1

  for (let i = 0, interval = 1; i < c.length; i++, interval++) {
    minCost += mult * c[i]

    if (interval === k) {
      mult++
      interval = 0
    }
  }

  return minCost
}

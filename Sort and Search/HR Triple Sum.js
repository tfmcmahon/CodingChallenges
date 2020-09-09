//https://www.hackerrank.com/challenges/triple-sum/problem

function triplets(a, b, c) {
  a = [...new Set(a.sort((d, e) => d - e))]
  b = [...new Set(b.sort((d, e) => d - e))]
  c = [...new Set(c.sort((d, e) => d - e))]

  let triplets = 0

  let aI = 0
  let bI = 0
  let cI = 0

  while (bI < b.length) {
    while (aI < a.length && a[aI] <= b[bI]) aI++

    while (cI < c.length && c[cI] <= b[bI]) cI++

    triplets += aI * cI

    bI++
  }

  return triplets
}

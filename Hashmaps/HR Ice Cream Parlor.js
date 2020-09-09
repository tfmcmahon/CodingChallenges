//https://https://www.hackerrank.com/challenges/ctci-ice-cream-parlor/problem

function whatFlavors(cost, money) {
  const costMap = getCostMap(cost)
  let icecreams = []

  for (let [price, index] of costMap.entries()) {
    let target = money - price
    if (target === price && costMap.get(target).length > 1) {
      let targets = costMap.get(target)
      targets.sort((a, b) => a - b)
      icecreams.push(costMap.get(price)[0])
      icecreams.push(costMap.get(price)[1])
      break
    } else if (target !== price && costMap.get(target)) {
      let targets = costMap.get(target)
      targets.sort((a, b) => a - b)
      icecreams.push(index)
      icecreams.push(costMap.get(target)[0])
      break
    }
  }

  return console.log(
    `${icecreams[0] < icecreams[1] ? icecreams[0] : icecreams[1]} ${
      icecreams[0] < icecreams[1] ? icecreams[1] : icecreams[0]
    }`
  )
}

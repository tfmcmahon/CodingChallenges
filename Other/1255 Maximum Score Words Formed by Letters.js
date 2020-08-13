//https://leetcode.com/problems/maximum-score-words-formed-by-letters/
//back-tracking

//TLE fail
var maxScoreWords = function (words, letters, score) {
  let scoreMap = getMap(letters, score)
  let wordScores = getWordScores(scoreMap, words)
  let maxScore = 0

  //perform dfs on the word bank
  const getScores = (newWords, newMap, currentScore) => {
    //console.log(currentScore, newWords, newMap)
    if (!newWords.length) return (maxScore = Math.max(currentScore, maxScore))

    //can i make the word at the current index from the letters in the map?
    //if yes, decrement the map and tally the score
    //remove the ith word and continue searching

    for (let i = 0; i < newWords.length; i++) {
      let success = true
      let tempMap = new Map(newMap)
      let tally = 0

      for (let letter of newWords[i]) {
        //console.log(newWords[i],tempMap)
        if (tempMap.get(letter) && tempMap.get(letter)[0] > 0) {
          tempMap.set(letter, [
            tempMap.get(letter)[0] - 1,
            tempMap.get(letter)[1],
          ])
          success = true
        } else {
          success = false
          tempMap = new Map(newMap)
          break
        }
      }

      tally = success ? wordScores.get(newWords[i]) : 0
      let nextWords = [...newWords]
      nextWords.splice(i, 1)

      getScores(nextWords, new Map(tempMap), currentScore + tally)
    }
  }

  //start dfs
  getScores(words, scoreMap, 0)

  return maxScore
}

//calc each word score
const getWordScores = (scoreMap, words) => {
  let map = new Map()
  let tempMap = new Map(scoreMap)

  for (let word of words) {
    let wordScore = 0

    for (let letter of word) {
      if (tempMap.get(letter) && tempMap.get(letter)[0]) {
        wordScore += tempMap.get(letter)[1]
        tempMap.set(letter, [
          tempMap.get(letter)[0] - 1,
          tempMap.get(letter)[1],
        ])
      } else {
        wordScore = 0
        break
      }

      tempMap = new Map(scoreMap)
    }

    map.set(word, wordScore)
  }

  return map
}

//convert letters + score into a map
//key: letter, val: [num, score]

const getMap = (letters, scores) => {
  let map = new Map()

  for (let letter of letters) {
    !map.has(letter) && map.set(letter, [0, 0])
    map.set(letter, [map.get(letter)[0] + 1, 0])
  }

  for (let i = 0; i < scores.length; i++) {
    let char = String.fromCharCode(97 + i)

    if (scores[i] && map.get(char)) map.set(char, [map.get(char)[0], scores[i]])
  }

  return map
}

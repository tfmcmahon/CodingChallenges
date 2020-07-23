//https://www.pramp.com/challenge/EmYgnOgVd4IElnjAnQqn
//recursion/fractal

const drawHTree = (center, length, depth) => {

  let [x, y] = center
  
  let xLeft = x - length / 2
  let xRight = x + length / 2
  
  let yUp =  y + length / 2
  let yDown = y - length / 2

  //draw 3 lines
  // 1 horizontal
  drawLine([[xLeft, y], [xRight, y]])
  
  // 2 vertical 
  drawLine([[xLeft, yDown], [xLeft, yUp]])
  drawLine([[xRight, yDown], [xRight, yUp]])

  let rootTwo = Math.sqrt(2)
  length /= rootTwo

  if (--depth) {

    drawHTree([xLeft, yDown], length, depth)
    drawHTree([xLeft, yUp], length, depth)
    drawHTree([xRight, yDown], length, depth)
    drawHTree([xRight, yUp], length, depth)      

  }
  
}

const drawLine = coords => {
  
  console.log(coords)
  
}



/*

Name of peer: Alex
CS background: self taught

What can I improve?: small typos
What did my peer think I can improve?: --

What did I do well?: Syntax, thinking through the problem
What did peer think I did well?: 

*/
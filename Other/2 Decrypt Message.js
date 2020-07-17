//Pramp practice interview question #2
//https://www.pramp.com/challenge/8noLWxLP6JUZJ2bA2rnx


const  decrypt = word => {
   
  let prev = 1
  let decrypted = ''
  
  for (let i = 0; i < word.length; i++) {
    
    let base = word.charCodeAt(i)
    
    base -= prev
    
    while (base < 97) base += 26
    
    prev += base
    
    decrypted += String.fromCharCode(base)
    
  }
 
  return decrypted
  
}
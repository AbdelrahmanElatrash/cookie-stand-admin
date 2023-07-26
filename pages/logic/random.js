function getRandomNumber() {
    // Generate a random number between 0 and 1
    const random = Math.random();
  
    // Scale and shift the random number to get a value between 20 and 50
    const randomNumber = 20 + random * 30;
  
    // Return the result
    return Math.floor(randomNumber);
  }


// chat gpt 

export function arrNumber(){
    const arr=[]
    for(let i=0; i<14;i++){
        let number=getRandomNumber();
        arr.push(number);
    }
    return arr
}

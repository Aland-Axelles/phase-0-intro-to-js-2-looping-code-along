// Code your solutions in this file

function writeCards(names, eventName) {
    const messages = [];
  
    for (let i = 0; i < names.length; i++) {
      let message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`; 
      messages.push(message); 
    }
  
    return messages;
  }
  


const thankYouMessages = writeCards(["Charlie", "Samip", "Ali"], "birthday");

console.log(thankYouMessages); 


function countDown(num) {
    let i = num + 1;
    while (i > 0) {
      console.log(i - 1);
      i -= 1;
    }
}

countDown(10);

const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names) {
  let messages = []; // initialize an empty array to store the messages
  for (let i = 0; i < names.length; i++) {
    let message = `Thank you, ${names[i]}, for the wonderful surprise gift!`; // notice "surprise"
    console.log(message);
    messages.push(message); // add the message to the messages array
  }
  return messages; // return the messages array instead of names
}

writeCards(names);

function countDown(num) {
  while(num >= 0) {
    console.log(num);
    num--;
  }
}
// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...
console.log(name.toUpperCase())


// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
const words = sentence.split(" ");
var sentenceResult = '' // Clear the target string
for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1); // capitalizing first letter of each word
    sentenceResult += ' ' + words[i] // concat the words
}
console.log(sentenceResult)


// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...
var moneyResult = '' //clear the money string
for (let i = 0; i < money.length; i++) {
    if (!isNaN(money[i])) { // check if each character in the string (tempMoneyCache) is a number.
        moneyResult += money[i] // concat the words
    }
}
console.log(moneyResult)
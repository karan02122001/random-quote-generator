let btn = document.getElementById('btn');
let output = document.getElementById('output')
let quotes = [
     { text : "A rose by any other name would smell as sweet.<br>", author: "William Shakespeare"} ,
    {text :"Ask not what your country can do for you; ask what you can do for your country.<br>" , author: "John Kennedy" },
    { text : "Genius is one percent inspiration and nintynine percent perspiration.<br>", author: "Thomas Edison"} ,
     { text :"Life is like riding a bicycle . To keep your balance, you must keep moving.<br>", author: "Albert Einstien"} ,
    { text :"If at first you don't succeed,try,try again.<br>", author: "W.E. Hickson"} ,
    { text : "For those to whom much is given, much is required.<br>" , author: "The Bible"},
];
console.log(quotes);

btn.addEventListener('click' , function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote.text + " - " +  randomQuote.author;
});
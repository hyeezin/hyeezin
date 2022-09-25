const quotes = [
  {
    quote: "When in doubt, tell the truth.",
    author: "Mark Twain",
  },
  {
    quote: "Only a life lived for others is a life worth while.",
    author: "Albert Einstein",
  },
  {
    quote: "Life is a journey to be experienced, not a problem to be solved",
    author: "Winnie the Pooh",
  },
  {
    quote: "You can't be happy every day but there are happy things every day",
    author: "Winnie the Pooh",
  },
  {
    quote: "In this life he laughs longest who laughs last.",
    author: "John Masefield",
  },
  {
    quote: "Live life as if there were no second chanel",
    author: "About Time",
  },
  {
    quote: "I do not like to repeat successes, I like to go on to other things",
    author: "Walt Disney",
  },
  {
    quote: "Never forget how much your family loves you.",
    author: "Coco",
  },
  {
    quote: "We are advertis'd by our loving friends.",
    author: "William Shakespeare",
  },
  {
    quote: "Well begun is half done.",
    author: "Aristotle",
  }
];


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// console.log(quotes[Math.floor(Math.random() * 10)]);
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;



//소수 부분을 없애기 위한 세 가지 방법 
//1. Math.round() : 숫자를 반올림 시킴
//2. ceil() : 숫자를 올림
//3. floor() : 숫자를 내림
/**
 *  Array of Objects, i'll use these quotes that i found on goodreads.com
 */
const quotes = [
  {
    quote: "Books were safer than other people anyway.",
    source: "Neil Gaiman",
    citation:"The Ocean at the End of the Lane",
    year: 2013
  },
  {
    quote: "The truth is I do love you. Admitting that means opening myself up to all that pain when you leave. After you realize this wasn’t love, but gratitude",
    source: "Kelly Moran",
    citation:"The Drake House",
    year: 2012,
    tags: "romantic"
  },
  {
    quote: "How do you go on, when in your heart you begin to understand... there is no going back? There are some things that time cannot mend. Some hurts that go too deep.",
    source: "J.R.R. Tolkien",
    citation:"The Return of the King",
    year: 1955
  },
  {
    quote: "I spent my life folded between the pages of books",
    source: "Tahereh Mafi",
    citation:"Shatter Me",
    year: 2011
  },
  {
    quote: "He loved books, those undemanding but faithful friends",
    source: "Victor Hugo",
    citation:"Les Misérables",
    year: 1862
  },
  {
    quote: "When you trust, you are tender and delicate, but when you doubt, you are dangerous and destructive",
    source: "Anaïs Nin",
    citation:"Les MisérablesThe Four-Chambered Heart: V3 in Nin's Continuous Novel",
    year: 1950
  },
  {
    quote: "Narratives can make us understand. Photographs do something else: they haunt us",
    source: "Susan Sontag",
    citation:"Regarding the Pain of Others",
    year: "2003"
  }


]

  
  
  





/***
 * This Function will randomly access an object from the quotes array
***/

function getRandomQuote(){
  const randomIndex = Math.floor(Math.random()*quotes.length)

  const randomQuote = quotes[randomIndex]

  return randomQuote

  


}
getRandomQuote()

// console.log(getRandomQuote().source)


/***
 * this function is used to store the string we'll later use to display the quotes on the page,
 * two if statements check if the citation and year is present in the object.
***/

function printQuote(){
  let html =`

  <p class = "quote"> ${getRandomQuote().quote}</p> 
  <p class= "source"> ${getRandomQuote().source} 
  `
  if(getRandomQuote().citation){html += `<span class = "citation">${getRandomQuote().citation}</span></p>`}
  if(getRandomQuote().year){html += `<span class = "year">${getRandomQuote().year}</span> </p>`}

  return document.getElementById('quote-box').innerHTML= html
  
  


}


 


/***
 * show another quote button
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
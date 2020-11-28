const quotecContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterButton = document.getElementById('twitter')
const newQuoteButton = document.getElementById('new-quote')

let apiQuotes = []

function newQuote() {
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    quoteText.textContent = quote.text
    if (quote.author === null) {
        authorText.textContent = 'Unknown'
    } else {
        authorText.textContent = quote.author
    }
}

// Get quote from API
async function GetQuotes() {
    const api = 'https://type.fit/api/quotes'
    try {
        const respone = await fetch(api)
        apiQuotes = await respone.json() 
        newQuote()
    } catch(error) {
        GetQuotes()
        console.log(error)
    }
}

// On Load
GetQuotes()
let apiQuotes = []

function newQuote() {
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    console.log(quote)
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
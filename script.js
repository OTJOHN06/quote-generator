// Get quote from API
async function GetQuote() {
    const proxy = 'https://cors-anywhere.herokuapp.com/'
    const api = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json'
    try {
        const respone = await fetch(proxy + api)
        const data = await respone.json() 
        console.log(data)
    } catch(error) {
        GetQuote()
        console.log(error)
    }
}

// On Load
GetQuote()
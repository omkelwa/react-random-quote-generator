export const getQuote = async ()=>{
    let res = await fetch(`https://api.quotable.io/random`)
    let data = await res.json()
    return data
    }


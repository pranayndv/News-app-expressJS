console.log("Hello JS.")

let query = window.location.search.split("?")[1].split("&")[0].split("=")[1];

let pageno =parseInt(window.location.search.split("?")[1].split("&")[1].split("=")[1]);

console.log(query, pageno)

const fetchNews =async (query, pageno)=>{
    let a =await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=0d2ef6aa62814f528749d40b36107d39`)
    
    let r =await a.json()
    console.log(r)
}
fetchNews('sports',4)
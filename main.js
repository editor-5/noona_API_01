const API_key = `97a48ff14e5f4a689f2b38b933426b5b`
let news = [];
const getLatestNews = async () =>{
    const url = new URL(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_key}`);
    const response = await fetch(url);
    const data = await response.json();
    news = data.articles;
    console.log("dddddd", news);
};


getLatestNews();

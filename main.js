const API_key = `1234567891011121314151617181920`
let news = [];
const getLatestNews = async () =>{
    const url = new URL(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_key}`);
    const response = await fetch(url);
    const data = await response.json();
    news = data.articles;
    console.log("dddddd", news);
};


getLatestNews();

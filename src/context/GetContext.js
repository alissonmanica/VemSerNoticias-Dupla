import { createContext, useState } from "react";
import axios from "axios";
import apiNews from "../apiNews";

export const GetContext = createContext();

function GetProvider({children}) {
const [news, setNews] = useState([])
let array = []



async function getNews(category) {

    const {data} = await apiNews.get(`${category}.json?api-key=1ES0ENwBlE33z8G7aGIzIGoAgVekpGOU`)
    const {results} = data;
    setNews(results);
    console.log(results);
    const mapear = news.forEach((e) => array.push(e.multimedia))
    console.log(array)
    
}

    return (
    <GetContext.Provider value={{setNews, getNews, news, array}}>
        {children}
    </GetContext.Provider>
    )
}

export default GetProvider;
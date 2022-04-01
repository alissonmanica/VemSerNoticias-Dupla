import { createContext, useState } from "react";
import axios from "axios";
import apiNews from "../apiNews";

export const GetContext = createContext();

function GetProvider({children}) {
const [news, setNews] = useState([])



async function getNews(category) {

    const {data} = await apiNews.get(`${category}.json?api-key=1ES0ENwBlE33z8G7aGIzIGoAgVekpGOU`)
    const {results} = data;
    setNews(results);
    console.log(results);
}

    return (
    <GetContext.Provider value={{setNews, getNews, news}}>
        {children}
    </GetContext.Provider>
    )
}

export default GetProvider;
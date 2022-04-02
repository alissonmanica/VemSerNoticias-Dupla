import { createContext, useState } from "react";
import axios from "axios";
import apiNews from "../apiNews";

export const GetContext = createContext();

function GetProvider({children}) {
const [news, setNews] = useState([])
const [loading, setLoading] = useState()
const [page, setPage] = useState()



async function getNews(url) {
    try {
        const {data} = await apiNews.get(`${url}.json?api-key=1ES0ENwBlE33z8G7aGIzIGoAgVekpGOU`)
        const {results} = data;
        console.log(results);
        setNews(data.results);
        setLoading(false)
        console.log(news)
    } catch (error) {
        console.log(error)
    }
}

    return (
    <GetContext.Provider value={{setNews, getNews, news, loading, page, setPage}}>
        {children}
    </GetContext.Provider>
    )
}

export default GetProvider;
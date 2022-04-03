import { createContext, useState } from "react";
import axios from "axios";
import apiNews from "../apiNews";
import Error from "../pages/error/Error";

export const GetContext = createContext();

function GetProvider({children}) {
const [news, setNews] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(false)
const [page, setPage] = useState();



async function getNews(url) {
    try {
        const {data} = await apiNews.get(`${url}.json?api-key=1ES0ENwBlE33z8G7aGIzIGoAgVekpGOU`);
        const {results} = data;
        setNews(data.results);
        setLoading(false);
        setError(false)
    } catch (error) {
        setLoading(false)
        setError(true)
        console.log(error)
    }
}

    return (
    <GetContext.Provider value={{setNews, getNews, news, loading, page, setPage, setLoading, error}}>
        {children}
    </GetContext.Provider>
    )
}

export default GetProvider;
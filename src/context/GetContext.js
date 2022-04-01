import { createContext, useState } from "react";
import axios from "axios";
import apiNews from "../apiNews";

export const GetContext = createContext();

function GetProvider({children}) {
const [news, setNews] = useState({})

async function getNews(category) {
    const {data} = await apiNews.get(`${category}.json?api-key=GuM09ompUMh0VrKAkDEsSOMDzsPVFqos`)
    
}

    return (
    <GetContext.Provider value={{setNews, getNews}}>
        {children}
    </GetContext.Provider>
    )
}

export default GetProvider;
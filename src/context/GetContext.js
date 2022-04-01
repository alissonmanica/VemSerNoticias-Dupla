import { createContext } from "react";
import axios from "axios";

export const GetContext = createContext();

function GetProvider({children}) {
    <GetContext.Provider>
        {children}
    </GetContext.Provider>
}

export default GetProvider;
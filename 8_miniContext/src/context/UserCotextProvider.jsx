import { useState } from "react";
import UserContext from "./userContext";

const UserCotextProvider = ({children}) => {
    
    const [user, setUser] = useState(null)
    
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserCotextProvider;

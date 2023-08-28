import React, { createContext, ReactNode, useState } from "react";

type UserId = {
    userUid: string;
    setUserUid: React.Dispatch<React.SetStateAction<string>>
}

export const MyContext = createContext<UserId | null>(null);

type Props = {
    children: ReactNode;
}

export function UserProvider(props: Props){

    const [userUid, setUserUid] = useState('');
    
    return(
        <MyContext.Provider value={{ userUid, setUserUid }}>
            {props.children}
        </MyContext.Provider>
    )

}
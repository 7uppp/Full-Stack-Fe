import React, {createContext, ReactNode, useState} from 'react';

export const UserInfoContext = createContext<UserInfoContextType | null>(null);


type UserInfoContextType = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}

interface UserInfoContextProviderProps {
    children: ReactNode;
}

export const UserInfoContextProvider: React.FC<UserInfoContextProviderProps> = ({children}) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
   const [userName,setUserName] = useState<string>('')
    return (
        <UserInfoContext.Provider value={{userName,setUserName}}>
            {children}
        </UserInfoContext.Provider>
    );
};

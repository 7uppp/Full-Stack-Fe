import React, {createContext, ReactNode, useEffect, useState} from 'react';
import makeRequest from "../makeRequest.ts";


type UserInfoContextType = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}

const defaultUserInfoContext: UserInfoContextType = {
    userName: '',
    isLogin: false,
};
export const UserInfoContext = createContext<UserInfoContextType>(defaultUserInfoContext);





interface UserInfoContextProviderProps {
    children: ReactNode;
}

export const UserInfoContextProvider: React.FC<UserInfoContextProviderProps> = ({children}) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isLogin, setIsLogin] = useState<boolean>(false)
    const [userName, setUserName] = useState<string>('')

    const checkLoginStatus = async () => {
        try {
            const response = await makeRequest('POST', '/getUserInfo', {})
            const user= response.data.user
            console.log(response)
            if (response.status === 200) {
                setIsLogin(true)
                setUserName(user.username)
            } else {
                setIsLogin(false)
            }
        } catch (e) {
            console.log(e)
        }
    };

    useEffect(() => {
        checkLoginStatus();
    },[]);


    return (
        <UserInfoContext.Provider value={{userName, isLogin,setIsLogin}}>
            {children}
        </UserInfoContext.Provider>
    );
};

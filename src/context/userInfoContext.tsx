import React, {createContext, ReactNode, useEffect, useState} from 'react';
import makeRequest from "../service/makeRequest.ts";

type UserInfoContextType = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}

const defaultUserInfoContext: UserInfoContextType = {
    userName: '',
    isLogin: false,
    latestTenPosts: [],
    setIsLogin: () => {},
};
export const UserInfoContext = createContext<UserInfoContextType>(defaultUserInfoContext);


interface UserInfoContextProviderProps {
    children: ReactNode;
}

export const UserInfoContextProvider: React.FC<UserInfoContextProviderProps> = ({children}) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isLogin, setIsLogin] = useState<boolean>(false)
    const [userName, setUserName] = useState<string>('')
    const [allPosts, setAllPosts] = useState(null)
    const [userId, setUserId] = useState<string>('')
    const [postId, setPostId] = useState<string>('')
    const [userAvatar, setUserAvatar] = useState<string>('')
    const [isAvatarChanged, setIsAvatarChanged] = useState<boolean>(false)


    const checkLoginStatus = async () => {
        try {
            const response = await makeRequest('POST', '/getUserInfo', {})

            const user = response.data.user
            console.log(user)
            if (response.status === 200) {
                setIsLogin(true)
                setUserName(user?.username)
                setUserId(user?.userId)
                setUserAvatar(user?.avatarSignedUrl)
            } else {
                setIsLogin(false)
            }
        } catch (e) {
            console.log(e)
        }
    };


    const loadAllPosts = async () => {
        try {
            const response = await makeRequest('GET', '/posts', {})
            if (response.status === 200) {

                setAllPosts(response.data?.data)
                setPostId(response.data?.data[0].postId)

            }
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        checkLoginStatus();
    },[isAvatarChanged])

    useEffect(() => {
        loadAllPosts();
    }, []);


    return (
        <UserInfoContext.Provider value={{userName, userId, isLogin, setIsLogin, allPosts, postId, userAvatar, setUserAvatar,setIsAvatarChanged}}>
            {children}
        </UserInfoContext.Provider>

    );
};

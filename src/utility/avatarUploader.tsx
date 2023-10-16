import React, {useContext, useRef} from 'react';
import '../css/avatarUploader.scss'
import makeRequest from "../service/makeRequest.ts";
import {UserInfoContext} from "../context/userInfoContext.tsx";
import defaultAvatar from '../assets/images/avatar.svg';

const AvatarLoader = () => {

    const {isLogin, userId, userName, userAvatar, setUserAvatar,setIsAvatarChanged} = useContext(UserInfoContext);
    const fileInputRef = useRef<HTMLInputElement>(null);


    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null;
        if (file) {
            onFileSelected(file);
        }
    }

    const handleProfileClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    }

    const uploadAvatar = async (userId: string, file: File): Promise<string | null> => {
        const formData = new FormData();
        formData.append('avatar', file);

        try {
            const response = await makeRequest('POST', `/auth/upload/avatar/${userId}`, null, formData);
            const { signedAvatarUrl } = response.data;
            setIsAvatarChanged(true)
            return signedAvatarUrl;
        } catch (error) {
            console.error('There was an error uploading the avatar:', error);
            return null;
        }
    }

    const onFileSelected = async (file: File) => {
        if (isLogin && userId) {
            const signedAvatarUrl = await uploadAvatar(userId, file);
            if (signedAvatarUrl) {
                setUserAvatar(signedAvatarUrl);
            }
        } else {
            console.log('User is not logged in, cannot upload avatar.');
        }
    };

    return (
        <div className={isLogin ? 'profile' : 'profile not-logged-in'}>
            {
                isLogin ?
                    <>
                        <img
                            className={'avatar'}
                            src={ userAvatar || defaultAvatar }
                            alt="avatar"
                            onClick={handleProfileClick}
                        />
                        <span>{userName ? `Barkalicious, ${userName}` : 'Barkalicious'}</span>
                    </>
                    :
                    <span>
                        <a href="/login">log in </a>
                    </span>
            }
            <input
                type="file"
                accept=".jpeg, .jpg, .png"
                style={{ display: 'none' }}
                ref={fileInputRef}
                onChange={handleFileChange}
            />
        </div>
    );
}

export default AvatarLoader;

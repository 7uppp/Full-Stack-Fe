import React from 'react';
import makeRequest from "../service/makeRequest.ts";

type FileCallback = (file: File) => void;
export const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, callback: FileCallback) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
        callback(file);
    }
}


type FileInputRef = React.RefObject<HTMLInputElement>;
export const handleProfileClick = (fileInputRef: FileInputRef) => {
    if (fileInputRef.current) {
        fileInputRef.current.click();
    }
}

export const uploadAvatar = async (userId: string, file: File): Promise<string | null> => {
    const formData = new FormData();
    formData.append('avatar', file);

    try {
        const response = await makeRequest('POST', `/auth/upload/avatar/${userId}`, null, formData);
        const { signedAvatarUrl } = response.data;
        return signedAvatarUrl;
    } catch (error) {
        console.error('There was an error uploading the avatar:', error);
        return null;  //
    }
}
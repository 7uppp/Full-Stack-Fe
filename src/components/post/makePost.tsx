import '../../css/makePost.scss';
import avatar from "../../assets/images/avatar.svg";
import uploadImg_Icon from "../../assets/images/uploadImg.svg";
import uploadGif from "../../assets/images/uploadGif.svg";
import GeneralButton from "../buttons/generalButton.tsx";
import React, { useState } from "react";
import makeRequest from "../../service/makeRequest.ts";


const MakePost = () => {

    const[post, setPost] = useState('')
    const[postError, setPostError] = useState(false)



    const handlePostInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.preventDefault();
        const postsValue = e.target.value;
        setPost(postsValue);
    };

    const submitPost = async () => {

        try {
            const response= await makeRequest('POST', '/auth/posts', {post})

            if (response.status === 201){
               setPost('')
            }
        }
        catch (e) {
            console.log(e)
            setPostError(true)
        }

    }

    return (
        <div className={'post_box'}>
            <img src={avatar} alt="user_avatar" />
            <div className={'make_posts'}>
                <textarea
                    className={'post_input'}
                    placeholder={'What does your Pawpal say?!'}
                    value={post}
                    onChange={handlePostInputChange}
                    maxLength={200}
                />
                {postError && <div style={{color: 'red',fontFamily:'Arial,, sans-serif'}}>Post failed, please refresh & try again</div>}
                <div style={{ color: '#c2c3c4' }}>
                    {post.length}/200
                </div>
                <div className={'function_buttons_container'}>
                    <div className={'upload_buttons'}>
                        <img src={uploadImg_Icon} alt="uploadImg_Icon" />
                        <img src={uploadGif} alt="uploadGif_Icon" />
                    </div>
                    <GeneralButton
                        text={"Pawst"}
                        onClick={submitPost}
                        customStyle={{
                            fontSize: "0.8rem",
                            fontFamily: "Young Serif, serif",
                            height: "1.5rem",
                            padding: '1rem 1rem'
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default MakePost;
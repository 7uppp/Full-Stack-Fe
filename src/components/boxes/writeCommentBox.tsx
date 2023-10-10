import React, {Dispatch, SetStateAction, useContext, useState} from "react";
import '../../css/commentBox.scss'
import {useNavigate} from "react-router-dom";
import makeRequest from "../../service/makeRequest";
import {UserInfoContext} from "../../context/userInfoContext.tsx";

interface CommentBoxProps {
    setShowCommentBox: Dispatch<SetStateAction<boolean>>;
    postId: string;
}

const WriteCommentBox: React.FC<CommentBoxProps> = ({setShowCommentBox, postId}) => {

    const navigate = useNavigate()
    const [comment, setComment] = useState<string>('');
    const [submitCommentError, setSubmitCommentError] = useState(false);
    const {userId, userName} = useContext(UserInfoContext)

    const commentHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.preventDefault()
        setComment(e.target.value)
    }
    const SubmitCommentHandler = async () => {
        if (!userId) {
            navigate('/login')
        }


        try {
            const response = await makeRequest('POST', `/auth/posts/${postId}/comments`, {comment, userId, userName})
            if (response.status === 200) {
                navigate('/')
            }
        } catch (e) {
            console.log(e)
            setSubmitCommentError(true)
        }
    };


    return (
        <div className={'comment_box'}>
            <div className={'textarea_wrapper'}>
                <textarea maxLength={100} onChange={commentHandler} placeholder="Write a comment..."></textarea>
                {submitCommentError && <span style={{color: "red"}}>Submit comment failed</span>}
                <button onClick={SubmitCommentHandler}>Reply</button>
            </div>
        </div>
    );
};

export default WriteCommentBox;
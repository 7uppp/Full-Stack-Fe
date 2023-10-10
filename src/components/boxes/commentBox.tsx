import React, {useContext} from "react";
import '../../css/commentBox.scss'
import {useParams} from "react-router-dom";
import makeRequest from "../../service/makeRequest";
import {UserInfoContext} from "../../context/userInfoContext.tsx";


const CommentBox = ({setShowCommentBox}) => {

    const [comment, setComment] = React.useState<string>('');
    const {userId} = useContext(UserInfoContext)
    const {postId} = useParams()

    const commentHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.preventDefault()
        setComment(e.target.value)
    }
    const SubmitCommentHandler = async () => {
        if (!userId) {
            return alert('Please login first')
        }
        setShowCommentBox(false)
        const response = await makeRequest('POST', `/auth/posts/${postId}/comments`, {comment, userId})
        console.log(response)

    };

    return (
        <div className={'comment_box'}>
            <div className={'textarea_wrapper'}>
                <textarea maxLength={100} onChange={commentHandler} placeholder="Write a comment..."></textarea>
                <button onClick={SubmitCommentHandler}>Reply</button>
            </div>
        </div>
    );
};

export default CommentBox;
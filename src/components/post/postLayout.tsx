import React from 'react';
import PostActionButton from "./postActionButton.tsx";
import defaultAvatar from '../../assets/images/avatar.svg'
import likeIconForCount from '../../assets/images/notLikedIcon.svg'
import shareIcon from "../../assets/images/shareIcon.svg";
import {timeDiff} from "../../utility/utility.ts";
import '../../css/postLayout.scss'
import commentIcon from "../../assets/images/commentIcon.svg";
import CommentBox from "../boxes/commentBox.tsx";


export interface PostLayoutProps {
    userAvatar: string,
    userName: string,
    postContent: string,
    postImg?: string,
    createAt: string,
    likeCount: number,
    commentCount: number,
}


const PostLayout: React.FC<PostLayoutProps> = ({
                                                   userAvatar,
                                                   userName,
                                                   postContent,
                                                   postImg,
                                                   createAt,
                                                   commentCount,
                                                   likeCount
                                               }) => {

    const [showCommentBox, setShowCommentBox] = React.useState(false);


    return (
        <div className={'post_container'}>
            <div className={'poster_information_container'}>
                <img src={userAvatar || defaultAvatar} alt="avatar"/>
                <div className={'poster_details'}>
                    <span style={{fontSize: "1.2rem", fontFamily: "Young Serif, serif"}}>{userName}</span>
                    <span style={{
                        fontSize: "1rem",
                        fontFamily: "Arial, serif",
                        color: "#a2a2a2"
                    }}>{timeDiff(createAt)} </span>
                </div>
            </div>

            < div className={'post_content'}>
                <div className={'post'}>{postContent}</div>
                {postImg && <img src={postImg} alt="postImg"/>}
            </div>

            {showCommentBox && <CommentBox setShowCommentBox={setShowCommentBox}/>}

            <div className={'reply_post'}>
                <PostActionButton totalNumber={commentCount} image={commentIcon}
                                  onClick={() => setShowCommentBox(!showCommentBox)}/>
                <PostActionButton totalNumber={likeCount} image={likeIconForCount} onClick={() => {
                }}/>
                <PostActionButton image={shareIcon} onClick={() => {
                }}/>
            </div>

        </div>
    );
};

export default PostLayout;
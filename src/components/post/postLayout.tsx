import React, {useState} from 'react';
import PostActionButton from "./postActionButton.tsx";
import defaultAvatar from '../../assets/images/avatar.svg'
import likeIconForCount from '../../assets/images/notLikedIcon.svg'
import shareIcon from "../../assets/images/shareIcon.svg";
import {timeDiff} from "../../utility/timeDifferenceCalculator.ts";
import '../../css/postLayout.scss'
import commentIcon from "../../assets/images/commentIcon.svg";
import WriteCommentBox from "../boxes/writeCommentBox.tsx";
import useFetchComments from "../../hooks/useFetchComments.ts";
import ShowCommentBox from "../boxes/showCommentBox.tsx";


export interface PostLayoutProps {
    userAvatar: string,
    userName: string,
    postContent: string,
    postId: string,
    postImg?: string,
    createAt: string,
    commentCount?: number,
    likeCount: number,
}


const PostLayout: React.FC<PostLayoutProps> = ({
                                                   userAvatar,
                                                   userName,
                                                   postContent,
                                                   postId,
                                                   postImg,
                                                   createAt,
                                                   commentCount,
                                                   likeCount,
                                               }) => {

    const [showCommentBox, setShowCommentBox] = useState(false);
    const {allComments, isFetchComment, fetchAllComments} = useFetchComments(postId);
    const [openCommentBox, setOpenCommentBox] = useState(false);


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

            {showCommentBox ? <WriteCommentBox setShowCommentBox={setShowCommentBox} postId={postId}/> : null}

            <div className={'reply_post'}>
                <PostActionButton totalNumber={commentCount} image={commentIcon}
                                  onClick={() => {
                                      setShowCommentBox(prev => !prev);
                                      setOpenCommentBox(true);
                                      fetchAllComments();
                                  }}/>

                <PostActionButton totalNumber={likeCount} image={likeIconForCount} onClick={() => {
                }}/>
                <PostActionButton image={shareIcon} onClick={() => {
                }}/>

            </div>

            {
                isFetchComment && openCommentBox && (allComments || []).map((comment,index) => {
                    return (
                        <React.Fragment key={index}>
                            {showCommentBox ? <ShowCommentBox  userName={comment?.userName} userAvatar={comment?.userAvatar}
                                                              commentContent={comment?.comment} createAt={comment?.createAt}
                                                              postImg={comment?.postImg}/> : null}
                        </React.Fragment>
                    )
                })
            }


        </div>
    );
};

export default PostLayout;
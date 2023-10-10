import React from 'react';
import defaultAvatar from "../../assets/images/avatar.svg";
import {timeDiff} from "../../utility/utility.ts";

interface ShowCommentBoxProps {
    userName: string,
    userAvatar: string,
    commentContent: string,
    createAt: string,
    postImg?: string,
}

const ShowCommentBox:React.FC<ShowCommentBoxProps> = ({userName, userAvatar,commentContent,createAt,postImg}) => {
    return (
        <div className={'comment_container'}>
            <div className={'comment_information_container'}>
                <img src={userAvatar || defaultAvatar} alt="avatar"/>
                <div className={'commenter_details'}>
                    <span style={{fontSize: "1.2rem", fontFamily: "Young Serif, serif"}}>{userName}</span>
                    <span style={{
                        fontSize: "1rem",
                        fontFamily: "Arial, serif",
                        color: "#a2a2a2"
                    }}>{timeDiff(createAt)} </span>
                </div>
            </div>

            < div className={'comment_content'}>
                <div className={'comment'}>{commentContent}</div>
                {postImg && <img src={postImg} alt="postImg"/>}
            </div>

        </div>
    );
};
export default ShowCommentBox;
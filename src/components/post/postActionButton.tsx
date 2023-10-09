import React from 'react';
import '../../css/postActionButton.scss'

interface PostActionButtonProps {
    totalNumber: number,
    image: string,
    onClick: () => void
}
const PostActionButton:React.FC<PostActionButtonProps> = ({totalNumber,image,onClick}) => {
    return (
        <div className={'postActionButton_container'} onClick={onClick}>
            <img src={image} alt="image" style={{width:"1.5rem"}}/>
            <span>{totalNumber}</span>
        </div>
    );
};

export default PostActionButton;
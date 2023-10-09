import React from 'react';
import '../../css/postActionButton.scss'

interface PostActionButtonProps {
    totalNumber: number,
    image: string,
}
const PostActionButton:React.FC<PostActionButtonProps> = ({totalNumber,image}) => {
    return (
        <div className={'postActionButton_container'}>
            <img src={image} alt="image" style={{width:"1.5rem"}}/>
            <span>{totalNumber}</span>
        </div>
    );
};

export default PostActionButton;
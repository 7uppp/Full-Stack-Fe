import PostLayout from "./postLayout.tsx";
import {useContext} from "react";
import {UserInfoContext} from "../../context/userInfoContext.tsx";
import defaultAvatar from '../../assets/images/avatar.svg'


const ShowAllPosts = () => {
    const {allPosts} = useContext(UserInfoContext)
    const allPostsContent = allPosts || [];

    return (
        <>
            {allPostsContent.slice(0, 10).map((post: any) => (
                <PostLayout
                    key={post.postId}
                    userAvatar={post.userAvatar ?? defaultAvatar}
                    userName={post.userName}
                    postContent={post.post}
                    postImg={post.postImg}
                    createAt={post.createAt}
                    likeCount={0}
                    commentCount={0}
                    // likeCount={post.likeCount}
                    // commentCount={post.commentCount}
                />

            ))}
        </>
    );
};

export default ShowAllPosts;
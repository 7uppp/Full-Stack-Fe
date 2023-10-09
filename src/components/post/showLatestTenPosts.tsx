
import PostLayout from "./postLayout.tsx";
import {useContext} from "react";
import {UserInfoContext} from "../../context/userInfoContext.tsx";


const ShowLatestTenPosts = () => {
    const {latestTenPosts} = useContext(UserInfoContext)
    const latestPosts = latestTenPosts || [];

    return (
        <>
        { latestPosts.slice(0,10).map((post:any) => (
            <>
                <PostLayout
                    userAvatar={post.userAvatar}
                    userName={post.userName}
                    postContent={post.post}
                    postImg={post.postImg}
                    createAt={post.createAt}
                    likeCount={0}
                    commentCount={0}
                    // likeCount={post.likeCount}
                    // commentCount={post.commentCount}
                />
            </>
        ))}
        </>
    );
};

export default ShowLatestTenPosts;
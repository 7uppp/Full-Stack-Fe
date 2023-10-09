import '../css/hero.scss'
import MakePost from "../components/post/makePost.tsx";
import ShowLatestTenPosts from "../components/post/showLatestTenPosts.tsx";



const Hero = () => {


    return (
        <div className={'hero_container'}>
            <div className="hero_wrapper">
                <div className="home_row">
                    Home
                </div>
                <MakePost/>
                <ShowLatestTenPosts/>
            </div>
        </div>
    );
};

export default Hero;
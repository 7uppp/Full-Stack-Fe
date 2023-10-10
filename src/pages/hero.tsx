import '../css/hero.scss'
import MakePost from "../components/post/makePost.tsx";
import ShowAllPosts from "../components/post/showAllPosts.tsx";



const Hero = () => {


    return (
        <div className={'hero_container'}>
            <div className="hero_wrapper">
                <div className="home_row">
                    Home
                </div>
                <MakePost/>
                <ShowAllPosts/>
            </div>
        </div>
    );
};

export default Hero;
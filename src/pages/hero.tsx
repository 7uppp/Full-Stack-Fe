import '../css/hero.scss'
import MakePost from "../components/makePost.tsx";



const Hero = () => {


    return (
        <div className={'hero_container'}>
            <div className="hero_wrapper">
                <div className="home_row">
                    Home
                </div>
                <MakePost/>
                <div className={'navigate_button'}>
                    <button>For you</button>
                    <button>Following</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
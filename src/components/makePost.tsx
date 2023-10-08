import '../css/makePost.scss';
import avatar from "../assets/images/avatar.svg";
import uploadImg_Icon from "../assets/images/uploadImg.svg";
import uploadGif from "../assets/images/uploadGif.svg";
import GeneralButton from "./buttons/generalButton.tsx";


const MakePost = () => {
    return (
        <div className={'post_box'}>
            <img src={avatar} alt="user_avatar"/>
            <div className={'make_posts'}>
                <textarea className={'post_input'}  placeholder={'What is happening?!'}/>
                <div className={'function_buttons_container'}>
                    <div className={'upload_buttons'}>
                        <img src={uploadImg_Icon} alt="uploadImg_Icon"/>
                        <img src={uploadGif} alt="uploadGif_Icon"/>
                    </div>
                    <GeneralButton text={"Pawst"} onClick={() => {
                    }} customStyle={{
                        fontSize: "0.8rem",
                        fontFamily: "Young Serif, serif",
                        height: "1.5rem",
                        padding: '1rem 1rem'
                    }}/>
                </div>
            </div>
        </div>
    );
};

export default MakePost;
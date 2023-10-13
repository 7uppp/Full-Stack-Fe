import '../../css/navBar.scss';
import mainLogo from '../../assets/images/mainLogo.svg';
import VerticalNavBarItem from "./verticalNavBarItem.tsx";
import NavItems from "../../constants/verticalNavConstans.ts";
import GeneralButton from "../buttons/generalButton.tsx";
import AvatarLoader from "../../utility/avatarUploader.tsx";

const NavBar = () => {
    return (
        <div className={'navbar'}>
            <div className={'navbar_wrapper'}>
                <div className={'logo_and_Name'}>
                    <img src={mainLogo} alt="logo"/>
                </div>

                <div className={'navigate_items'}>
                    {NavItems.map((item, index) => (
                        <VerticalNavBarItem key={index} image={item.image} text={item.text}/>
                    ))}
                </div>

                <GeneralButton className={'post_button'} text={"Pawst"} onClick={() => {}} customStyle={{fontSize: "0.8rem", fontFamily: "Young Serif, serif", height: "3.2rem"}}/>
            </div>
            <AvatarLoader />
        </div>
    );
}

export default NavBar;

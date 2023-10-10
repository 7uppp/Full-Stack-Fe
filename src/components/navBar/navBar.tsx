import '../../css/navBar.scss'
import mainLogo from '../../assets/images/mainLogo.svg'
import {UserInfoContext} from "../../context/userInfoContext.tsx";
import {useContext} from "react";
import avatar from '../../assets/images/avatar.svg'
import VerticalNavBarItem from "./verticalNavBarItem.tsx";
import NavItems from "../../constants/verticalNavConstans.ts";
import GeneralButton from "../buttons/generalButton.tsx";


const NavBar = () => {

    const {userName, isLogin} = useContext(UserInfoContext)
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

                <GeneralButton className={'post_button'} text={"Pawst"} onClick={() => {
                }} customStyle={{fontSize: "0.8rem", fontFamily: "Young Serif, serif", height: "3.2rem"}}/>

            </div>

            <button className={'profile'}>
                <img src={avatar} alt="avatar"/>
                {
                    isLogin ? <span>Barkalicious,&nbsp; {userName}</span> :
                        <span> <a href="/login">log in </a> </span>
                }
            </button>

        </div>
    )
}

export default NavBar
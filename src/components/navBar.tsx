import '../css/navBar.scss'
import mainLogo from '../assets/images/mainLogo.svg'
import {UserInfoContext} from "../context/userInfoContext";
import {useContext} from "react";
import avatar from '../assets/images/avatar.svg'
import VerticalNavBarItem from "./verticalNavBarItem";
import NavItems from "../constants/verticalNavConstans.ts";


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
                        <VerticalNavBarItem key={index} image={item.image} text={item.text} />
                    ))}
                </div>


                <div className={'profile'}>
                    <img src={avatar} alt="avatar"/>
                    {
                        isLogin ? <span>Barkalicious,&nbsp; {userName}</span> :
                            <span> <a href="/login">log in</a> </span>
                    }
                </div>


            </div>


        </div>
    )
}

export default NavBar
import { useContext, useRef } from 'react';
import '../../css/navBar.scss';
import mainLogo from '../../assets/images/mainLogo.svg';
import { UserInfoContext } from "../../context/userInfoContext.tsx";
import defaultAvatar from '../../assets/images/avatar.svg';
import VerticalNavBarItem from "./verticalNavBarItem.tsx";
import NavItems from "../../constants/verticalNavConstans.ts";
import GeneralButton from "../buttons/generalButton.tsx";
import { handleFileChange, handleProfileClick } from '../../utility/uploadImageHnadler.ts';

const NavBar = () => {
    const { userName, isLogin, userAvatar, onFileSelected } = useContext(UserInfoContext);
    const fileInputRef = useRef(null);

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

            <div className={isLogin ? 'profile' : 'profile not-logged-in'}>
                {
                    isLogin ?
                        <>
                            <img
                                className={'avatar'}
                                src={userAvatar || defaultAvatar}
                                alt="avatar"
                                onClick={() => handleProfileClick(fileInputRef)}
                            />
                            <span>Barkalicious, {userName}</span>
                        </>
                        :
                        <span>
                            <a href="/login">log in </a>
                        </span>
                }
                <input
                    type="file"
                    style={{ display: 'none' }}
                    ref={fileInputRef}
                    onChange={(e) => handleFileChange(e, onFileSelected)}
                />
            </div>
        </div>
    );
}

export default NavBar;

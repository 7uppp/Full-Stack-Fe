import {NavBarItems} from '../constants/navBarConstant.ts'
import '../css/navBar.scss'
const NavBar = () => {
    return (
        <div className={'navbar'}>
            <div className={'navbar_wrapper'}>
                {NavBarItems.map(item=>(
                    <div key={item.id}>{item.label}</div>
                ))}
            </div>

            <span>Hello,xxxx</span>
        </div>
    )
}

export default NavBar
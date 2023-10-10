import {BrowserRouter, Route, Routes, Outlet} from "react-router-dom";
import Login from "./pages/login.tsx";
import Hero from "./pages/hero.tsx";
import './index.css'
import RadialEffectComponent from "./animate/radialEffect.tsx";
import {UserInfoContextProvider} from "./context/userInfoContext.tsx";
import Register from "./pages/register.tsx";
import Navbar from "./components/navBar/navBar.tsx";
import CommentBox from "./components/boxes/commentBox.tsx";


function App() {
    return (
        <div className={'appWrapper'}>
            <UserInfoContextProvider>
                <RouterContent/>
            </UserInfoContextProvider>
        </div>
    );
}

function RouterContent() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HeroLayout/>}>
                    <Route index element={<Hero/>}/>
                </Route>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path={"/auth/posts/:postId/comments"} element={CommentBox}/>
            </Routes>
            <RadialEffectComponent/>
        </BrowserRouter>
    );
}

function HeroLayout() {
    return (
        <div className={'layout_wrapper'}>
            <Navbar/>
            <Outlet />
        </div>
    );
}


export default App;



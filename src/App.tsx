import {BrowserRouter, Route, Routes, Navigate, Outlet} from "react-router-dom";
import Login from "./pages/login.tsx";
import Hero from "./pages/hero.tsx";
import './index.css'
import RadialEffectComponent from "./components/radialEffect.tsx";
import {UserInfoContextProvider} from "./context/userInfoContext.tsx";
import {UserInfoContext} from "./context/userInfoContext.tsx";
import {useContext} from "react";
import Register from "./pages/register.tsx";
import Navbar from "./components/navBar.tsx";



function App() {
    return (
        <div className={'appWrapper'}>
            <UserInfoContextProvider>
                <RouterContent />
            </UserInfoContextProvider>
        </div>
    );
}

function RouterContent() {
    const {isLogin} = useContext(UserInfoContext);

    return (
        <BrowserRouter>
            <Routes>
                {
                    isLogin ? (
                        <>
                            <Route path="/" element={<AuthenticatedLayout />}>
                                <Route index element={<Hero />} />
                            </Route>
                            <Route path="/login" element={<Navigate to="/" />} />
                        </>
                    ) : (
                        <>
                            <Route path="/" element={<Navigate to="/login" />} />
                            <Route path="/login" element={<Login />} />
                        </>
                    )
                }
                <Route path="/register" element={<Register />} />
            </Routes>
            <RadialEffectComponent/>
        </BrowserRouter>
    );
}

function AuthenticatedLayout() {
    return (
        <div className={'layout_wrapper'}>
            <Navbar />
            <Outlet />
        </div>
    );
}






export default App;



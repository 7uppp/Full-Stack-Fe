import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css'
import Login from "./pages/login.tsx";
import Hero from "./pages/hero.tsx";
import './index.css'
import RadialEffectComponent from "./components/RadialEffect.tsx";
import {UserInfoContextProvider} from "./context/userInfoContext.tsx";


function App() {

    return (
        <div className={'appWrapper'}>
            <UserInfoContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path={'/'} element={<Login/>}/>
                        <Route path={'/home'} element={<Hero/>}></Route>
                    </Routes>
                    <RadialEffectComponent/>
                </BrowserRouter>
            </UserInfoContextProvider>
        </div>

    )
}

export default App

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login.tsx";
import Hero from "./pages/hero.tsx";
import './index.css'
import RadialEffectComponent from "./components/RadialEffect.tsx";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Login/>}/>
                <Route path={'/home'} element={<Hero/>}></Route>
            </Routes>
            <RadialEffectComponent />
        </BrowserRouter>


    )
}

export default App

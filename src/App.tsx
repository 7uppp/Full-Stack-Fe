import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login.tsx";
import './index.css'
import RadialEffectComponent from "./components/RadialEffect.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Login/>}/>
            </Routes>
            <RadialEffectComponent />
        </BrowserRouter>


    )
}

export default App

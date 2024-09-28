import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import App from "../App";
import MainMenu from "../screens/MainMenu";

function MainRouter(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/mainmenu" element={<MainMenu/>}/>
            </Routes>
        </Router>
    )
}

export default MainRouter
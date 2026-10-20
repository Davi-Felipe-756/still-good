 import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
 import App from '../pages/App/index.jsx';
 import Home from '../pages/Home/index.jsx';
 import Login from '../pages/Login/index.jsx';
 import Cadastro from "../pages/Cadastro/index.jsx";
 import Perfil from '../pages/Perfil/index.jsx';
export default function AppRoutes() {
    return(
<>  
        <Router>

             <Routes>

                <Route path= '/' element={<App />}/>
                 <Route path= '/login' element={<Login />}/>
                  <Route path= '/Cadastro' element={<Cadastro />}/>
                <Route path= '/home' element={<Home />}/>
                <Route path="/perfil" element={<Perfil />} />
             </Routes>   
        
        </Router>
</>

    )
}
 import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
 import App from '../pages/App/index.jsx'
 import Home from '../pages/Home/index.jsx'

export default function AppRoutes() {
    return(
<>  
        <Router>

             <Routes>

                <Route path= '/' element={<App />}/>
                <Route path= '/home' element={<Home />}/>

             </Routes>   
        
        </Router>
</>

    )
}

import "./styles/style.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Menu from './pages/Menu';
import Navbar from './components/Navbar';
import Cart from "./pages/Cart";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'

import Login from "./pages/Login";
import Register from "./pages/Register";
import Orders from "./pages/Orders";
import { baseUrl } from "./baseUrl";
function App() {
  return (

    
    <div className="App">
      
         <Navbar/>
    {/* <ErrorBoundary> */}
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Menu/>}/>
            <Route path={ `${baseUrl}/cart`} element={<Cart/>}/>
            <Route path={ `${baseUrl}/login`} element={<Login/>}/>
            <Route path={ `${baseUrl}/register`} element={<Register/>}/>
            <Route path={ `${baseUrl}/order`} element={<Orders/>}/>
         </Routes>
      </BrowserRouter>
    {/* </ErrorBoundary> */}

    </div>
  );
}

export default App;

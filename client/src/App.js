
import "./styles/style.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './App.css';
import Menu from './pages/Menu';
import Navbar from './components/Navbar';
import Cart from "./pages/Cart";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'
import { ErrorBoundary } from "./components/ErrorBoundary";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Orders from "./pages/Orders";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (

    
    <div className="App">
      
         <Navbar/>
    {/* <ErrorBoundary> */}
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Menu/>}/>
            <Route path="cart" element={<Cart/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="orders" element={<Orders/>}/>
         </Routes>
      </BrowserRouter>
    {/* </ErrorBoundary> */}

    </div>
  );
}

export default App;

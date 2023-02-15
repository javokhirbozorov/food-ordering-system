
import "./styles/style.scss"
// import './App.css';
import Menu from './pages/Menu';
import Navbar from './components/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (

    
    <div className="App">
         <Navbar/>
         <Menu/>
    </div>
  );
}

export default App;


import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

//Pages
import Home from './PAGES/Home';
import Sobre from './PAGES/Sobre';
import Atendimento from './PAGES/Atendimento';

//components
import Navbar from './components/Navbar';

function App(){

  return (
    <div className = "App">
      <h1>Hello world!</h1>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="atendimento" element={<Atendimento/>} />
            <Route path="sobre" element={<Sobre/>} />
          </Routes>      
      </BrowserRouter>
    </div>
  );
}
export default App;

import './App.css';
import {  Switch,  Route,  Link} from "react-router-dom";
import ContactUs from './Components/ContactUs';

import About from './Components/About';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

function App() {
  
  return (
    <div className="App">

  
    <NavBar />
    <Home />
    <Footer/>

   
    </div>
  );
}

export default App;

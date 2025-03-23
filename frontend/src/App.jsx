import Home from './pages/Home';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
// import {Browserrouter as Router, Routes,Route} from "react-router-dom";

function App() {
 

  return (
    <>
    <Navbar/>
      <Home/>
      <Footer/>
    </>
  )
}

export default App

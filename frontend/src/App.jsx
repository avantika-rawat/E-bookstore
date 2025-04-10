import Home from './pages/Home';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import AllBooks from './pages/AllBooks';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
function App() {
 

  return (
    <>
   <Router>
   <Navbar/>
   <Routes>

    <Route exact path='/' element={ <Home/>}/>
    <Route  path='/all-books' element={ <AllBooks/>} />
    <Route  path='/cart' element={ <Cart/>} />
    <Route  path='/profile' element={ <Profile/>} />
    <Route  path='/LogIn' element={ <LogIn/>}/>
    <Route  path='/SignUp' element={ <SignUp/>}/>

   </Routes> 
   <Footer/>
   </Router>
    </>
  )
}

export default App;

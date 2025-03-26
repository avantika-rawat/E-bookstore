import { Link } from "react-router-dom";
import { FaGripLines } from "react-icons/fa";
const Navbar = () => {

const links = [
    {
        title : "Home",
        link : "/",
    },
    {
        title : "All Books",
        link : "/all-books",
    }, {
        title : "Cart",
        link : "/cart",
    }, {
        title : "Profile",
        link : "/profile",
    },
]

  return (
    <>
    <nav className="z-50 relative flex bg-cyan-900 text-white px-8 py-2 items-center justify-between">
    <Link className="flex ">
    <img 
    className="h-16 w-16  me-4 items-center"
    src="images/logo.png" alt="logo" />
    <div className="text-2xl font-semibold mt-3"><h1>BookCove</h1></div>
    </Link>

    <div className="nav-links-bookheaven block md:flex items-center gap-4 ">
    <div className="hidden md:flex gap-4"> 
      {links.map((items,i)=>(
    <Link to={items.link} className="hover:text-blue-500 transition-all duration-300" key={i}>{items.title}</Link>
    ))}   </div>
    
    <div className="hidden md:flex gap-4">
    <Link to="/LogIn" className="px-1  py-2 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300">LogIn</Link>
    <Link to="/SignUp" className="  px-1  py-2 bg-blue-500 text-zinc-800 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300">SignUp</Link>
   
    </div>
  
    <button className="text-white text-2xl hover:">
    <FaGripLines />
    </button>
   
    </div>
    </nav>

    
    <div className="bg-zinc-800 h-screen absolute top-0 left-0 w-full z-40 flex flex-col items-center justify-center  "  >
    {links.map((items,i)=>(
    <Link to={items.link} className="text-white mb-8 text-4xl font-semibold hover:text-blue-500 transition-all duration-300" key={i}>{items.title}</Link>
    ))}
    <Link to="/LogIn" className="text-xl font-semibold px-8 mb-8 py-2 border border-blue-500 rounded text-white hover:bg-white hover:text-zinc-800 transition-all duration-300">LogIn</Link>
    <Link to="/SignUp" className=" text-xl font-semibold px-8 mb-8 py-2 bg-blue-500 text-zinc-800 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300">SignUp</Link>
    </div>
    </>
  )
}

export default Navbar;


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
    <div className="flex bg-cyan-900 text-white px-8 py-2 items-center justify-between">
      <div className="flex ">
<img 
className="h-16 w-16  me-4 items-center"
src="images/logo.png" alt="logo" />
           <div className="text-2xl font-semibold"><h1>BookCove</h1></div>

     
      </div>

      <div className="nav-links-bookheaven flex items-center gap-4 ">
          <div className="flex gap-4"> {links.map((items,i)=>(
            <div className="hover:text-blue-500 transition-all duration-300" key={i}>{items.title}</div>
           ))}</div>
           <div className="flex gap-4">
            <button className="px-2 py-1 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300">LogIn</button>
            <button className="px-2 py-1 bg-blue-500 text-zinc-800 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300">SignUp</button>
           </div>
      </div>
    </div>
  )
}

export default Navbar;

import { Link } from "react-router-dom";
import { FaGripLines } from "react-icons/fa";
import { useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const links = [
    { title: "Home", link: "/" },
    { title: "All Books", link: "/all-books" },
    { title: "Cart", link: "/cart" },
    { title: "Profile", link: "/profile" },
    { title: "Admin Profile", link: "/profile" },
  ];

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const role = useSelector((state) => state.auth.role);

  if (!isLoggedIn) {
    links.splice(2, 3); // Remove Cart and Profile if not logged in
  }

  if (isLoggedIn == true && role === "user") {
    links.splice(4, 1);
  }

  if (isLoggedIn == true && role === "admin") {
    links.splice(3, 1);
  }

  const [MobileNav, setMobileNav] = useState("hidden");

  return (
    <>
      <nav className="z-50 h-[10%] relative flex bg-white/10 text-white px-8 py-2 items-center justify-between border-b-2 backdrop-blur-md">
        <Link className="flex" to="/">
          <img
            className="h-19 w-[14%] me-0 items-center "
            src="images/logo.png"
            alt="logo"
          />
          <div className="text-2xl font-semibold mt-3">
            <h1 className="font-bold ">BookCove</h1>
          </div>
        </Link>

        <div className="nav-links-bookheaven block md:flex items-center gap-4">
          <div className="hidden md:flex gap-4">
            {links.map((item, i) => (
              <div key={i}>
                {item.title === "Profile" || item.title === "Admin Profile" ? (
                  <Link
                    to={item.link}
                    className="hover:text-beige transition-all duration-300"
                  >
                    {item.title}
                  </Link>
                ) : (
                  <Link
                    to={item.link}
                    className="hover:text-beige transition-all duration-300"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:flex gap-4">
            {!isLoggedIn && (
              <>
                <Link
                  to="/LogIn"
                  className="px-5 py-2 border border-beige font-semibold rounded hover:bg-white/30 hover:text-white transition-all duration-300"
                >
                  LogIn
                </Link>
                <Link
                  to="/SignUp"
                  className="px-4 py-2 border bg-white/30
                   text-white font-semibold rounded hover:bg-transparent hover:text-white transition-all duration-300"
                >
                  SignUp
                </Link>
              </>
            )}
          </div>

          <button
            className="block md:hidden text-white text-2xl"
            onClick={() =>
              MobileNav === "hidden"
                ? setMobileNav("block")
                : setMobileNav("hidden")
            }
          >
            <FaGripLines />
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      <div
        className={`${MobileNav} bg-zinc-800 h-screen absolute top-0 left-0 w-full z-40 flex flex-col items-center justify-center`}
      >
        {links.map((item, i) => (
          <div
            className="flex items-center justify-center"
            key={i}
            onClick={() => setMobileNav("hidden")}
          >
            <Link
              to={item.link}
              className="text-white mb-8 text-4xl font-semibold hover:text-blue-500 transition-all duration-300"
            >
              {item.title}
            </Link>
          </div>
        ))}

        {!isLoggedIn && (
          <>
            <Link
              to="/LogIn"
              className="text-xl font-semibold px-8 mb-8 py-2 border border-blue-500 rounded text-white hover:bg-white hover:text-zinc-800 transition-all duration-300"
              onClick={() => setMobileNav("hidden")}
            >
              LogIn
            </Link>
            <Link
              to="/SignUp"
              className="text-xl font-semibold px-8 mb-8 py-2 bg-blue-500 text-zinc-800 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300"
              onClick={() => setMobileNav("hidden")}
            >
              SignUp
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;

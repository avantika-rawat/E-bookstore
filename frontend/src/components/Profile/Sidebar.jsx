import { Link } from "react-router-dom";
const Sidebar = ({ data }) => {
  return (
    <div className="bg-darkbrown p-4 rounded flex flex-col items-between justify-center h-[100%]">
      <div className="flex items-center flex-col justify-center">
        <img src={data.avatar} className="h-[10vh]" />
        <p className="mt-3 text-xl text-zinc-100 font-semibold">
          {data.username}
        </p>
        <p className="mt-1 text-normal text-zinc-300">{data.email}</p>
        <div className="w-full mt-4 h-[1px] bg-black hidden lg:block"></div>
      </div>

      <div className="w-full flex-col items-center justify-evenly hidden lg:flex">
        <Link
          to="/"
          className="text-zinc-100 font-semibold w-full py-2 text-center hover:bg-black rounded transition-all duration-300"
        >
          Favourites
        </Link>
        <Link
          to="/"
          className="text-zinc-100 font-semibold w-full py-2 text-center hover:bg-black rounded transition-all duration-300"
        >
          Order History
        </Link>
        <Link
          to="/"
          className="text-zinc-100 font-semibold w-full py-2 text-center hover:bg-black rounded transition-all duration-300"
        >
          Settings
        </Link>
        <button className="bg-darkbrown w-3/6 lg:full mt-0 text-white font-semibold flex items-center justify-center py-2 rounded hover:bg-white text-darkbrown transition-all duration-300">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

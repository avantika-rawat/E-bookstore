import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../features/auth";
const Sidebar = ({ data }) => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const role = useSelector((state) => state.auth.role);
  return (
    <div className="bg-transparent border p-4 rounded flex flex-col items-between justify-center h-auto lg:h-[80%] backdrop-blur-sm">
      <div className="flex items-center flex-col justify-center">
        <img src={data.avatar} className="h-[10vh]" />
        <p className="mt-3 text-xl text-zinc-100 font-semibold">
          {data.username}
        </p>
        <p className="mt-1 text-normal text-zinc-300">{data.email}</p>
        <div className="w-full mt-4 h-[1px] bg-white hidden lg:block"></div>
      </div>

      {role === "user" && (
        <div className="w-full flex-col items-center justify-evenly hidden lg:flex">
          <Link
            to="/profile"
            className="text-zinc-100 border-blue-50 font-semibold w-full py-2 text-center hover:text-beige rounded transition-all duration-300"
          >
            Favourites
          </Link>
          <Link
            to="/profile/orderHistory"
            className="text-zinc-100 font-semibold w-full py-2 text-center hover:text-beige rounded transition-all duration-300"
          >
            Order History
          </Link>
          <Link
            to="/profile/settings"
            className="text-zinc-100 font-semibold w-full py-2 text-center hover:text-beige rounded transition-all duration-300"
          >
            Settings
          </Link>
        </div>
      )}

      {role === "admin" && (
        <div className="w-full flex flex-col gap-5 items-center justify-between my-8">
          <Link
            to="/profile"
            className="text-zinc-100 font-semibold w-full  text-center hover:text-beige rounded transition-all duration-300"
          >
            All order History
          </Link>
          <Link
            to="/profile/add-book"
            className="text-zinc-100 font-semibold w-full text-center hover:text-beige rounded transition-all duration-300"
          >
            Add Book
          </Link>
        </div>
      )}

      <button
        onClick={() => {
          dispatch(authActions.logout());
          dispatch(authActions.changeRole("user"));
          localStorage.clear("id");
          localStorage.clear("token");
          localStorage.clear("role");
          history("/");
        }}
        className="bg-transparent ml-12 border w-3/6 lg:full mt-4 text-white font-semibold flex items-center justify-center py-2 rounded hover:text-beige transition-all duration-300"
      >
        Log Out
      </button>
    </div>
  );
};

export default Sidebar;

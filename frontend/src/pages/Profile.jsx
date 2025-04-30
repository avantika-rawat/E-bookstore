import Sidebar from "../components/Profile/Sidebar";
import { Outlet } from "react-router-dom";
// import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader";
import MobileNav from "../components/Profile/MobileNav";
import Navbar from "../components/Navbar/Navbar";

const Profile = () => {
  // const isLoggedIn = useSelector();
  const [profile, setProfile] = useState();
  const headers = {
    authorization: `Bearer ${localStorage.getItem("token")}`,
    id: localStorage.getItem("id"),
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1000/api/v1/get-user-information",
          { headers }
        );
        console.log("Fetched user data:", response.data); // 🔍
        setProfile(response.data);
      } catch (err) {
        console.error("Error fetching profile:", err);
      }
    };
    fetch();
  }, []);

  return (
    <div
      className="h-screen bg-cover text-white "
      style={{ backgroundImage: `url(/images/background-img.jpg)` }}
    >
      <Navbar />
      <div className=" px-2 md:px-12 flex flex-col md:flex-row  py-8 gap-4 ">
        {!profile && (
          <div className="w-full h-[100%] flex items-center justify-center">
            <Loader />
          </div>
        )}
        {profile && (
          <>
            <div className="w-full md:w-1/6 h-auto lg:h-screen">
              <Sidebar data={profile} />
              <MobileNav />
            </div>
            <div className="w-5/6">
              <Outlet />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;

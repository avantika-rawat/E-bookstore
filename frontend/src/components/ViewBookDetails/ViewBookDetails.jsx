import { useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../Loader/Loader";
import { useSelector } from "react-redux";

const ViewBookDetails = () => {
  const { id } = useParams();
  const [Data, setData] = useState();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const role = useSelector((state) => state.auth.role);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1000/api/v1/get-book-by-id/${id}`
        );
        setData(response.data.data);
      } catch (err) {
        console.error("Failed to fetch book details", err);
      }
    };
    fetch();
  }, []);

  const headers = {
    authorization: `Bearer ${localStorage.getItem("token")}`,
    id: localStorage.getItem("id"),
    bookid: id,
  };

  const handleFav = async () => {
    // console.log("headers from front: " + JSON.stringify(headers));
    try {
      const response = await axios.put(
        "http://localhost:1000/api/v1/add-book-to-favourite",
        {}, // Empty body since all necessary data is in headers
        { headers }
      );
      alert(response.data.message);
    } catch (error) {
      console.log("Failed to add to favorites", error);
    }
  };

  const handleCart = async () => {
    // console.log("headers from front: " + JSON.stringify(headers));

    try {
      const response = await axios.put(
        "http://localhost:1000/api/v1/add-to-cart",
        {}, // Empty body since all necessary data is in headers
        { headers }
      );
      alert(response.data.message);
    } catch (error) {
      console.log("Failed to add to Cart", error);
    }
  };

  if (!Data) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <div className="px-8 md:px-12 py-8 bg-beige flex flex-col lg:flex-row gap-8 items-start">
        <div className="   w-full lg:w-3/6 ">
          <div className="flex flex-col lg:flex-row justify-around rounded bg-darkbrown py-12 ">
            <img
              src={Data.url}
              className="h-[50vh] m-8 md:h-[70vh] lg:h-[70vh] rounded"
              alt={Data.title}
            />
            {isLoggedIn === true && role === "admin" && (
              <div className="flex flex-col lg:flex-col items-center justify-center mt-4 space-y-4 lg:mt-0 lg:items-start lg:justify-start">
                <div className="flex flex-row gap-4 lg:flex-col">
                  <button className="bg-white rounded-full w-12 h-12 text-2xl flex items-center justify-center">
                    <EditIcon />
                  </button>
                  <button className="bg-white rounded-full w-12 h-12 text-2xl flex items-center justify-center text-red-400">
                    <DeleteIcon />
                  </button>
                </div>
              </div>
            )}
            {isLoggedIn === true && role === "user" && (
              <div className="flex flex-col lg:flex-col items-center justify-center mt-4 space-y-4 lg:mt-0 lg:items-start lg:justify-start">
                <div className="flex flex-row gap-4 lg:flex-col">
                  <button
                    className="bg-white rounded-full w-12 h-12 text-2xl flex items-center justify-center text-red-400"
                    onClick={handleFav}
                  >
                    <FavoriteIcon />
                  </button>
                  <button
                    onClick={handleCart}
                    className="bg-white rounded-full w-12 h-12 text-2xl flex items-center justify-center text-blue-400"
                  >
                    <ShoppingCartIcon />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="p-4 text-black lg:w-3/6">
          <h2 className="text-3xl font-bold mb-4">{Data.title}</h2>
          <p className="mb-2 font-semibold">Author: {Data.author}</p>
          <p className="mt-4 font-semibold">{Data.desc}</p>
          <p className="mb-2 font-semibold">Price: ₹{Data.price}</p>
          <p className="mb-2 font-semibold">Language: {Data.language}</p>
        </div>
      </div>
    </>
  );
};

export default ViewBookDetails;

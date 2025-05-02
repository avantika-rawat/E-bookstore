/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import axios from "axios";

const BookCard = ({ data, favourite }) => {
  const headers = {
    authorization: `Bearer ${localStorage.getItem("token")}`,
    id: localStorage.getItem("id"),
    bookid: data._id,
  };
  const handleRemoveBook = async () => {
    const response = await axios.put(
      `http://localhost:1000/api/v1/remove-book-from-favourite/${data._id}`,
      {},
      { headers }
    );
    alert(response.data.message);
  };
  return (
    <>
      <div className="w-90 bg-white/30 backdrop-blur-md border rounded p-2 flex flex-col ">
        <Link to={`/view-book-details/${data._id}`}>
          <div className=" flex items-center justify-center">
            <img src={data.url} alt="/" className="h-[35vh]   " />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="bg-zinc-500 rounded flex items-center justify-center"></div>
            <h2 className="mt-4 text-xl text-white font-bold ">{data.title}</h2>
            <p className="mt-2 text-white font-semibold">by {data.author}</p>
            <p className="mt-2 text-white font-semibold">
              {"\u20B9"}
              {data.price}
            </p>
          </div>
        </Link>

        {favourite && (
          <button
            onClick={handleRemoveBook}
            className="bg-transparent border-2 font-semibold mt-2 p-1 rounded text-white"
          >
            Remove from favourites
          </button>
        )}
      </div>
    </>
  );
};

export default BookCard;

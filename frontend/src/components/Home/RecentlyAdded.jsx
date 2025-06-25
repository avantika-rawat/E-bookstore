import { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "../BookCard/BookCard";
import Loader from "../Loader/Loader";

const RecentlyAdded = () => {
  const [Data, setData] = useState();

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        "https://bookcove.onrender.com/api/v1/get-recent-books"
      );
      setData(response.data.data);
    };
    fetch();
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white py-8 px-4"
      style={{ backgroundImage: `url(/images/bg-RA.webp)` }}
    >
      <h4 className="text-2xl md:text-3xl lg:text-4xl text-white text-center font-bold">
        Recently added books
      </h4>

      {!Data && (
        <div className="flex items-center justify-center my-8">
          <Loader />
        </div>
      )}

      <div className="my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Data &&
          Data.map((items, i) => (
            <div key={i}>
              <BookCard data={items} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default RecentlyAdded;

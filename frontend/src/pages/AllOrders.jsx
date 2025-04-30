import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import SeeUserData from "./SeeUserData";

const AllOrders = () => {
  const [options, setOptions] = useState(-1);
  const [allOrders, setAllOrders] = useState();
  const [values, setValues] = useState({ status: "" });
  const [userDiv, setUserDiv] = useState("hidden");
  const [userDivData, setUserDivData] = useState();
  const headers = {
    authorization: `Bearer ${localStorage.getItem("token")}`,
    id: localStorage.getItem("id"),
  };
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get("/get-all-orders", { headers });
      setAllOrders(res.data.data);
    };
    fetch();
  }, [allOrders]);
  const change = (e) => {
    const { value } = e.target;
    setValues({ status: value });
  };

  const submitChanges = async (i) => {
    const id = allOrders[i]._id;
    const res = await axios.put(`/update-status/${id}`, Values, { headers });
    alert(res.data.message);
  };

  const setOptionsButton = (i) => {};
  return (
    <div>
      {!allOrders && (
        <div className="flex items-center justify-center h-[100%]">
          <Loader />
        </div>
      )}

      {allOrders && allOrders.length > 0 && (
        <div className="h-[100%] p-0 md:p-4 text-beige">
          <h1 className="text-3xl md:text-5xl font-semibold text-white mb-8">
            All Orders
          </h1>

          <div className="mt-4 bg-darkbrown w-full rounded py-2 px-4 flex gap-2">
            <div className="w-[3%]">
              <h1 className="text-center">Sr.</h1>
            </div>
            <div className="w-[22%]">
              <h1>Books</h1>
            </div>
            <div className="w-[45%]">
              <h1>Description</h1>
            </div>
            <div className="w-[9%]">
              <h1>Price</h1>
            </div>
            <div className="w-[16%]">
              <h1>Status</h1>
            </div>
            <div className="w-none md:w-[5%] hidden md:block">
              <h1>Model</h1>
            </div>
          </div>
          {allOrders.map((items, i) => {
            <div className="bg-darkbrown w-full rounded py-4 px-4 flex gap-2 ">
              <div className="w-[3]">
                <h1 className="text-center">{i + 1}</h1>
              </div>
              <div className="w-[40%] md:w-[22%]">
                <Link
                  to={`/view-book-details/${items.book._id}`}
                  className="hover:text-blue-50"
                >
                  {items.book.title}
                </Link>
              </div>
              <div className="w-0 md:w-[45] hidden md:block">
                <h1 className="">{items.book.desc.slice(0, 50)}...</h1>
              </div>
              <div className="w-[17%] md:w-[9%]">
                <h1 className="">{items.book.price}</h1>
              </div>
              <div className="w-[30%] md:w-[16%] ">
                <h1 className="font-semibold">
                  <button
                    onClick={() => setOptionsButton(i)}
                    className="hover:scale-105 transition-all duration-300"
                  >
                    {items.status === "Order placed" ? (
                      <div className="text-yellow-50">{items.status}</div>
                    ) : items.status === "Canceled" ? (
                      <div className="text-red-50">{items.status}</div>
                    ) : (
                      <div className="text-red-50">{items.status}</div>
                    )}
                  </button>
                  <div className={`${options === i ? "flex" : "hidden"}`}>
                    <select
                      onChange={change}
                      name="status"
                      value={values.status}
                      id=""
                      className="bg-darkbrown"
                    >
                      {[
                        "Order placed",
                        "Out for delivery",
                        "Delivered",
                        "Canceled",
                      ].map((items, i) => (
                        <option value={items} key={i}>
                          {" "}
                          {items}
                        </option>
                      ))}
                    </select>
                    <button
                      onClick={() => {
                        setOptions(-1);
                        submitChanges(i);
                      }}
                      className="text-green-50 mx-2 hover:bg-pink-500"
                    >
                      chcek
                    </button>
                  </div>
                </h1>
              </div>
              <div className="w-[10%] md:w-[5%]">
                <button
                  onClick={() => {
                    setUserDiv("fixed");
                    setUserDivData(items.user);
                  }}
                  className="text-xl hover:text-orange-300"
                >
                  button
                </button>
              </div>
            </div>;
          })}
          {userDivData && (
            <SeeUserData
              userDivData={userDivData}
              userDiv={userDiv}
              setUserDiv={setUserDiv}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default AllOrders;

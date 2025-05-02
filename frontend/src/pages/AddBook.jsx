import { useState } from "react";
import axios from "axios";

const AddBook = () => {
  const [Data, setData] = useState({
    url: "",
    title: "",
    author: "",
    price: "",
    desc: "",
    language: "",
  });
  const headers = {
    authorization: `Bearer ${localStorage.getItem("token")}`,
    id: localStorage.getItem("id"),
  };

  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };

  const submit = async () => {
    try {
      if (
        Data.url === "" ||
        Data.title === "" ||
        Data.author === "" ||
        Data.price === "" ||
        Data.desc === "" ||
        Data.language === ""
      ) {
        alert("All fields are required");
      } else {
        const res = await axios.post("", Data, { headers });
        setData({
          url: "",
          title: "",
          author: "",
          price: "",
          desc: "",
          language: "",
        });
        alert(res.data.message);
      }
    } catch (err) {
      alert(err.res.data.message);
    }
  };
  return (
    <div className="h-[100%] p-0 md:p-4">
      <h1 className="text-3xl md:text 5xl font-semibold text-white uppercase mb-8">
        Add Book
      </h1>
      <div className="p-4 bg-white/30 backdrop-blur-md border-2 rounded-2xl">
        <div>
          <label htmlFor="" className="text-white font-semibold">
            Image
          </label>
          <input
            type="text"
            className="placeholder-white/70 w-full mt-2 bg-transparent  border-2 text-white p-2 outline-none"
            placeholder="url"
            required
            value={Data.url}
            onChange={change}
          />
        </div>

        <div className="mt-4">
          <label htmlFor="" className="text-white font-semibold">
            Title of Book
          </label>
          <input
            type="text"
            className="placeholder-white/70 w-full mt-2 bg-transparent  border-2 text-white p-2 outline-none"
            placeholder="Title"
            name="title"
            required
            value={Data.title}
            onChange={change}
          />
        </div>

        <div className="mt-4">
          <label htmlFor="" className="text-white font-semibold">
            Author of Book
          </label>
          <input
            type="text"
            className="placeholder-white/70 w-full mt-2 bg-transparent  border-2 text-white p-2 outline-none"
            placeholder="Author"
            name="author"
            required
            value={Data.author}
            onChange={change}
          />
        </div>

        <div className="mt-4 flex gap-4">
          <div className="w-3/6">
            <label htmlFor="" className="text-white font-semibold">
              Language
            </label>
            <input
              type="text"
              className="placeholder-white/70 w-full mt-2 bg-transparent  border-2 text-white p-2 outline-none"
              placeholder="Language"
              name="Language"
              required
              value={Data.language}
              onChange={change}
            />
          </div>
          <div className="w-3/6">
            <label htmlFor="" className="text-beige">
              Price
            </label>
            <input
              type="text"
              className="placeholder-white/70 w-full mt-2 bg-transparent  border-2 text-white p-2 outline-none"
              placeholder="Price"
              name="price"
              required
              value={Data.price}
              onChange={change}
            />
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="" className="text-white font-semibold">
            Description
          </label>
          <input
            type="text"
            className="placeholder-white/70 w-full mt-2 bg-transparent  border-2 text-white p-2 outline-none"
            placeholder="Description"
            name="desc"
            required
            value={Data.desc}
            onChange={change}
          />
        </div>
        <button
          className="mt-4 px-3 bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition-all duration-300"
          onSubmit={submit}
        >
          Add Book
        </button>
      </div>
    </div>
  );
};

export default AddBook;

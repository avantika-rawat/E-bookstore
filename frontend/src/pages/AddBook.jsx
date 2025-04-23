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
      <h1 className="text-3xl md:text 5xl font-semibold text-darkbrown mb-8">
        Add Book
      </h1>
      <div className="p-4 bg-darkbrown rounded">
        <div>
          <label htmlFor="" className="text-beige">
            Image
          </label>
          <input
            type="text"
            className="w-full mt-2 bg-beige text-black p-2 outline-none"
            placeholder="url of image"
            required
            value={Data.url}
            onChange={change}
          />
        </div>

        <div className="mt-4">
          <label htmlFor="" className="text-beige">
            Title of Book
          </label>
          <input
            type="text"
            className="w-full mt-2 bg-beige text-black p-2 outline-none"
            placeholder="Title"
            name="title"
            required
            value={Data.title}
            onChange={change}
          />
        </div>

        <div className="mt-4">
          <label htmlFor="" className="text-beige">
            Author of Book
          </label>
          <input
            type="text"
            className="w-full mt-2 bg-beige text-black p-2 outline-none"
            placeholder="Author"
            name="author"
            required
            value={Data.author}
            onChange={change}
          />
        </div>

        <div className="mt-4 flex gap-4">
          <div className="w-3/6">
            <label htmlFor="" className="text-beige">
              Language
            </label>
            <input
              type="text"
              className="w-full mt-2 bg-beige text-black p-2 outline-none"
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
              className="w-full mt-2 bg-beige text-black p-2 outline-none"
              placeholder="Price"
              name="price"
              required
              value={Data.price}
              onChange={change}
            />
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="" className="text-beige">
            Description
          </label>
          <input
            type="text"
            className="w-full mt-2 bg-beige text-black p-2 outline-none"
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

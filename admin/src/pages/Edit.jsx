
import React, { useState, useEffect } from "react";
import assets from "../assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const Edit = ({ token }) => {
  const { id } = useParams();
  const [image, setImage] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Animals");
  const [subCategory, setSubCategory] = useState("Bears");
  const [bestseller, setBestSeller] = useState(false);
  const [sizes, setSizes] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.post(
          backendUrl + "/api/product/single",
          { productId: id },
          { headers: { token } }
        );
        if (response.data.success) {
          const product = response.data.product;
          setName(product.name);
          setDescription(product.description);
          setPrice(product.price.toString());
          setCategory(product.category);
          setSubCategory(product.subCategory);
          setBestSeller(product.bestseller);
          setSizes(product.sizes);
          setImage(product.image || false);
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    };
    fetchProduct();
  }, [id, token]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));

      if (image && typeof image !== "string") {
        formData.append("image", image);
      }

      const response = await axios.put(
        backendUrl + `/api/product/${id}`,
        formData,
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col w-full items-start gap-3"
    >
      <div>
        <p className="mb-2 text-black-500">Upload Image</p>
        <div className="flex gap-2">
          <label htmlFor="image1">
            <img
              className="w-20"
              src={
                !image || typeof image !== "string"
                  ? assets.uploadIcon
                  : image
              }
              alt=""
            />
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              id="image1"
              hidden
            />
          </label>
        </div>
      </div>
      <div className="w-full">
        <p className="mb-2">Product name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Type here"
          required
        />
      </div>
      <div className="w-full">
        <p className="mb-2">Product description</p>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Write content here.."
          required
        />
      </div>
      <div className="flex felx-col sm:flex-row gap-2 w-full sm:gap-8">
        <div>
          <p className="mb-2">Product Category</p>
          <select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            className="w-full px-3 py-2"
          >
            <option value="Animals">Animals</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Holiday">Holiday</option>
            <option value="Miniatures">Miniatures</option>
          </select>
        </div>
        <div>
          <p className="mb-2">Sub Category</p>
          <select
            onChange={(e) => setSubCategory(e.target.value)}
            value={subCategory}
            className="w-full px-3 py-2"
          >
            <option value="Bears">Bears</option>
            <option value="Bunnies">Bunnies</option>
            <option value="Birds">Birds</option>
            <option value="Monkeys">Monkeys</option>
            <option value="Dragons">Dragons</option>
            <option value="Elves">Elves</option>
            <option value="Santa">Santa</option>
            <option value="Mini Bears">Mini Bears</option>
          </select>
        </div>
        <div>
          <p className="mb-2">Product Price</p>
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            className="w-full px-3 py-2 sm:w-[120px]"
            type="Number"
            placeholder="950"
          />
        </div>
      </div>
      <div>
        <p className="mb-2">Product Sizes</p>
        <div className="flex gap-3">
          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("Small")
                  ? prev.filter((item) => item !== "Small")
                  : [...prev, "Small"]
              )
            }
          >
            <p
              className={`${
                sizes.includes("Small") ? "bg-pink-100" : "bg-slate-200"
              } px-3 py-1 cursor-pointer`}
            >
              Small
            </p>
          </div>
          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("Medium")
                  ? prev.filter((item) => item !== "Medium")
                  : [...prev, "Medium"]
              )
            }
          >
            <p
              className={`${
                sizes.includes("Medium") ? "bg-pink-100" : "bg-slate-200"
              } px-3 py-1 cursor-pointer`}
            >
              Medium
            </p>
          </div>
          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("Large")
                  ? prev.filter((item) => item !== "Large")
                  : [...prev, "Large"]
              )
            }
          >
            <p
              className={`${
                sizes.includes("Large") ? "bg-pink-100" : "bg-slate-200"
              } px-3 py-1 cursor-pointer`}
            >
              Large
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-2 mt-2">
        <input
          onChange={() => setBestSeller((prev) => !prev)}
          checked={bestseller}
          type="checkbox"
          id="bestseller"
        />
        <label className="cursor-pointer" htmlFor="bestseller">
          Add to bestseller
        </label>
      </div>
      <button
        type="submit"
        className="w-28 py-3 mt-4 bg-black text-white hover:opacity-80"
      >
        UPDATE
      </button>
    </form>
  );
};

export default Edit;
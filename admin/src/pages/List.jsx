
import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const List = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/product/remove",
        { id },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (e) {
      console.log(e);
      toast.error(e.message);
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItem = list.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(list.length / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div>
      <p className="mb-2 text-orange-500 text-lg font-semibold">All Products List</p>
      <div className="flex flex-col gap-2">
        {/* -------List Table Title ------- */}
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-2 px-3 border bg-green-600 text-sm text-white font-medium rounded">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className="text-center">Action</b>
        </div>

        {/* ----Product List---- */}
        {currentItem.map((item, index) => (
          <div
            className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-2 px-3 border text-sm bg-white hover:shadow-sm rounded"
            key={index}
          >
            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>
              {currency}
              {item.price}
            </p>
            <div className="text-right md:text-center flex justify-end items-center gap-6 pr-2">
              <Link
                to={`/edit/${item._id}`}
                className="bg-black text-white px-4 py-1 rounded hover:opacity-80 text-sm"
              >
                Edit
              </Link>
              <p
                onClick={() => removeProduct(item._id)}
                className="cursor-pointer text-lg text-red-500 hover:text-red-700"
              >
                X
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* pagination control */}
      <div className="flex justify-center items-center gap-2 border p-3 mt-7 rounded shadow-sm w-fit mx-auto bg-white">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 border border-gray-500 rounded disabled:opacity-50 hover:bg-gray-100"
        >
          Prev
        </button>

        <div className="flex gap-1">
          {pageNumbers.map((page) => (
            <button
              key={page}
              onClick={() => handlePageClick(page)}
              className={`px-4 py-2 border border-gray-500 rounded hover:bg-gray-200 ${
                currentPage === page ? "bg-green-600 text-white font-bold" : ""
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 border border-gray-500 rounded disabled:opacity-50 hover:bg-gray-100"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default List;

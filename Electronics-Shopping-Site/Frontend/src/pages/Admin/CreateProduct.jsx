import { useEffect, useState } from "react";
import { AdminMenu } from "./AdminMenu";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";

const CreateProduct = () => {
  const initialValue = {
    name: "",
    description: "",
    price: "",
    quantity: "",
    category: "",
    photo: null,
  };

  const [productInfo, setProductInfo] = useState(initialValue);
  const [categoryData, setCategoryData] = useState(null);
  const navigate = useNavigate()

  // fetching categories to create product -----------

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await api.get("/product-category");
        console.log(res.data.category);
        setCategoryData(res.data?.category);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
  }, []);

  // product creation methods ----------------

  const handleSubmit = (e) => {
    e.preventDefault();
    // add productInfo to formData
  };

  const hanldeChange = (e) => {
    const { name, value, type, files } = e.target;
    setProductInfo({
      ...productInfo,
      [name]: type === "file" ? files[0] : value, // check input is file
    });
  };

  const handleClick = async () => {
    const formData = new FormData();
    formData.append("name", productInfo.name);
    formData.append("description", productInfo.description);
    formData.append("price", productInfo.price);
    formData.append("quantity", productInfo.quantity);
    formData.append("category", productInfo.category);
    formData.append("photo", productInfo.photo);

    // use formData in to create Product 
    const token = localStorage.getItem("token");
    try {
      const res = await api.post(
        "/admin/createProduct",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data);
      toast(res.data.msg);
      setProductInfo(initialValue); // clear input and   reset form
        navigate("/admin/products")
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.error || "Something went wrong");
    }
  };

  console.log(productInfo);

  return (
    <div className="bg-blue-50 min-h-screen w-full ">
      <p className="text-center text-3xl py-10 font-bold">Create Product</p>
      <div className="flex flex-col w-[300px]  lg:w-full gap-5 lg:flex-row lg:justify-between lg:mr-20  ">
        <div>
          <AdminMenu />
        </div>
        <div className="ml-5 lg:ml-[180px] w-full mr-10">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 w-full  "
        >
          <input
            type="text"
            name="name"
            value={productInfo.name}
            placeholder="Product Name"
            className="border p-2"
            onChange={hanldeChange}
          />
          <input
            type="text"
            name="description"
            value={productInfo.description}
            placeholder="Description"
            className="border p-3"
            onChange={hanldeChange}
          />
          <div className=" flex justify-between gap-5">
            <input
              type="Number"
              name="price"
              value={productInfo.price}
              placeholder="Price"
              className="border w-full p-2"
              onChange={hanldeChange}
            />
            <input
              type="Number"
              name="quantity"
              value={productInfo.quantity}
              placeholder="Quantity"
              className="border w-full p-2"
              onChange={hanldeChange}
            />
          </div>
          <select
            className="p-2 border cursor-pointer"
            name="category"
            value={productInfo.category}
            onChange={hanldeChange}
          >
            <option>Category</option>
            {categoryData &&
              categoryData.map((c) => (
                <option key={c._id} value={c._id}>
                  {c.name}
                </option>
              ))}
          </select>
          <label className="bg-slate-300 active:bg-slate-500 p-2 rounded-sm cursor-pointer text-center">
            {productInfo.photo ? productInfo.photo.name : "Upload Photo"}
            <input
              type="file"
              name="photo"
              accept="image/*"
              className="border p-2 w-full hidden"
              onChange={hanldeChange}
            />
          </label>

          <button
            className="bg-slate-600 active:bg-black text-white p-2 rounded-sm"
            onClick={handleClick}
          >
            submit
          </button>
        </form>
                {productInfo.photo && (
          <div className="mt-4 justify-center">
            <img
              src={URL.createObjectURL(productInfo.photo)}
              alt="Preview"
              className="w-40 h-40 object-cover rounded-md border"
            />
          </div>
        )}
        </div>
      </div>
      
    </div>
  );
};
export default CreateProduct;

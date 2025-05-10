
import productModel from "../models/productModel.js";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;

    const image = req.file;
    if (!image)
      return res.json({ success: false, message: "Image is required" });

    const result = await cloudinary.uploader.upload(image.path, {
      resource_type: "image",
    });

    const product = new productModel({
      name,
      description,
      price: Number(price),
      image: result.secure_url,
      category,
      subCategory,
      sizes: JSON.parse(sizes),
      bestseller: bestseller === "true",
      date: Date.now(),
    });

    await product.save();
    fs.unlinkSync(image.path);

    res.json({ success: true, message: "Product Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const listProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const removeProduct = async (req, res) => {
  try {
    await productModel.findOneAndDelete({ _id: req.body.id });
    res.json({ success: true, message: "Product Removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const singleProduct = async (req, res) => {
  try {
    const product = await productModel.findById(req.body.productId);
    res.json({ success: true, product });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;

    const product = await productModel.findById(id);
    if (!product) {
      return res.json({ success: false, message: "Product not found" });
    }

    product.name = name || product.name;
    product.description = description || product.description;
    product.price = price ? Number(price) : product.price;
    product.category = category || product.category;
    product.subCategory = subCategory || product.subCategory;
    product.sizes = sizes ? JSON.parse(sizes) : product.sizes;
    product.bestseller = bestseller === "true";

    const image = req.file;
    if (image) {
      const result = await cloudinary.uploader.upload(image.path, {
        resource_type: "image",
      });
      product.image = result.secure_url;
      fs.unlinkSync(image.path);
    }

    await product.save();
    res.json({ success: true, message: "Product Updated" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export {
  listProducts,
  addProduct,
  removeProduct,
  singleProduct,
  updateProduct,
};



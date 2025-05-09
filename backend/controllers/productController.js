import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";
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

    // Handling single image upload
    const image = req.file; 

    if (image) {
      // Upload to Cloudinary
      const result = await cloudinary.uploader.upload(image.path, {
        resource_type: "image",
      });

      // Getting the image URL from Cloudinary
      const imageUrl = result.secure_url;

      // Create product data
      const productData = {
        name,
        description,
        category,
        price: Number(price),
        subCategory,
        bestseller: bestseller === "true" ? true : false,
        sizes: JSON.parse(sizes),
        image: imageUrl, 
        date: Date.now(),
      };

      // Save the product to the database
      const product = new productModel(productData);
      await product.save();

      res.json({ success: true, message: "Product Added" });
    } else {
      res.json({ success: false, message: "No image provided" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// function for list products
const listProducts = async (req, res) => {
  try{
    const products = await productModel.find({});
    res.json({success:true, products})
}catch(error){
    console.log(error);
    res.json({success:false,message:error.message})

}

};

// function for removing product
const removeProduct = async (req, res) => {
  try{
    await productModel.findByIdAndDelete(req.body.id)
    res.json({success:true, message:"Product Removed"})
}catch(error){
    console.log(error);
    res.json({success:false,message:error.message})
}
};

// function for single product info
const singleProduct = async (req, res) => {
   try{
        const {productId} = req.body
        const product = await productModel.findById(productId)
        res.json({success:true,product})
    }catch(error){
        console.log(error);
    }
};

export { listProducts, addProduct, removeProduct, singleProduct };
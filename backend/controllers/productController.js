


// //function for  add product
// const addProduct = async(req, res) => {
//    try{
//     const{name, description, price, category, subcategory, sizes, bestseller} = req.body

//     const image1 = req.files.image1[0]
//     const image2 = req.files.image2[0]
//     const image3 = req.files.image3[0]
//     const image4 = req.files.image4[0]

//     console.log(name, description, price, category, subcategory, sizes, bestseller);
    
//     console.log(image1, image2, image3, image4)
    
//     res.json({})


//    }catch(error){
//     console.log(error)
//     res.json({sucess:false,message:error.message})

//    }


// }


// //function for list product
//  const listProducts = async (req, res) => {

//  }


//  //function for removing product
//  const removeProduct = async (req, res) => {

//  }


//  //function for  single product info 

//  const singleProduct = async (req, res) =>{

//  }









// // function for add product 
// const addProduct = async (req, res) => {     
//     try {        
//       const { name, description, price, category, subcategory, sizes, bestseller } = req.body;
            
//       const image1 =  req.files.image1 && req.files.image1[0];        
//       const image2 =  req.files.image2 && req.files.image2[0];        
//       const image3 =  req.files.image3&& req.files.image3[0];        
//       const image4 =  req.files.image4 && req.files.image4[0];
            
//       console.log(name, description, price, category, subcategory, sizes, bestseller);        
//       console.log(image1, image2, image3, image4);
            
//       res.json({});       
//     } catch (error) {        
//       console.log(error);        
//       res.json({ success: false, message: error.message });     
//     }  
//   }    
  
//   // function for list product  
//   const listProducts = async (req, res) => {    
//   }    
  
//   // function for removing product  
//   const removeProduct = async (req, res) => {    
//   }    
  
//   // function for single product info   
//   const singleProduct = async (req, res) => {    
//   }
  
//   // Export all functions at the end of the file
//   export { addProduct, listProducts, removeProduct, singleProduct };






















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
    const image = req.file; // Using req.file because it's a single image now

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
        image: imageUrl, // Single image URL
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
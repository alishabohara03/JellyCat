
import express from 'express';
import adminAuth from '../middleware/adminAuth.js';
import upload from '../middleware/multer.js';
import {
  listProducts,
  addProduct,
  removeProduct,
  singleProduct,
  updateProduct,
} from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.post('/add', adminAuth, upload.single('image'), addProduct);
productRouter.get('/list', listProducts);
productRouter.post('/remove', adminAuth, removeProduct);
productRouter.post('/single', singleProduct);
productRouter.put('/:id', adminAuth, upload.single('image'), updateProduct);

export default productRouter;

import express from 'express';
import Product from '../model/product.model.js';

const router = express.Router();

// GET all products: /api/v1/products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Add a product: /api/v1/products/add
router.post('/add', async (req, res) => {
  try {
    const { name, price } = req.body;
    const newProduct = new Product({ name, price });

    // Save the product to the database
    await newProduct.save();

    // Send a success response
    res.status(201).json({ message: 'Product added successfully' });
  } catch (error) {
    // Handle any errors and send an error response
    console.error(error);
    res.status(500).json({ error: 'An error occurred while adding the product' });
  }
});

// GET a product by ID: /api/v1/products/:id
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      res.status(404).json({ error: 'Product not found' });
    } else {
      res.json(product);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE a product by ID: /api/v1/products/:id
router.delete('/:id', async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      res.status(404).json({ error: 'Product not found' });
    } else {
      res.json({ msg: 'Product deleted' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT (update) a product by ID: /api/v1/products/:id
router.put('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      res.status(404).json({ error: 'Product not found' });
    } else {
      product.name = req.body.name;
      product.price = req.body.price;
      await product.save();
      res.json({ msg: 'Product successfully updated' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;

const express = require('express');
const router = express.Router();
const Product = require('../model/product.js');

router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 10, sortBy = 'dateAdded', sortOrder = 'desc', ...filters } = req.query;

    const pageNumber = parseInt(page);
    const limitNumber = parseInt(limit);

    const sortOptions = {};
    sortOptions[sortBy] = sortOrder === 'desc' ? -1 : 1;

    const products = await Product.find(filters)
      .sort(sortOptions)
      .skip((pageNumber - 1) * limitNumber)
      .limit(limitNumber);

    // Get total count of items with the applied filters
    const totalCount = await Product.countDocuments(filters);

    res.json({
      products,
      totalProducts: totalCount,
      totalPages: Math.ceil(totalCount / limitNumber),
      currentPage: pageNumber,
    });
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
});

module.exports = router;

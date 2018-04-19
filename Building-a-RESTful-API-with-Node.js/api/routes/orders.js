
const express = require('express');
const router = express.Router();

// handling routes

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Order were fetched'
  });
});

router.post('/', (req, res, next) => {
  const order = {
    productId: req.body.productId,
    quantity: req.body.quantity
  };
  res.status(201).json({
    message: 'Order was fetched',
    order: order
  });
});

router.post('/:orderId', (req, res, next) => {
  if (id == 'special') {
    res.status(200).json({
      message: 'You discovered the SpecialID',
      id: req.params.orderId
    });
  } else {
    res.status(200).json({
      message: 'You passed an ID'
    });
  }
});

router.delete('/:orderId', (req, res, next) => {
  res.status(200).json({
    message: 'Order Deleted!'
  });
});



module.exports = router;

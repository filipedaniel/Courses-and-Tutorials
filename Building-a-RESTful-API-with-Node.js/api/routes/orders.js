
const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const Order = require('../models/order');
const Product = require('../models/products');

// handling routes

router.get('/', (req, res, next) => {
  Order
    .find()
    .select('_id product quantity')
    .exec()
    .then((result) => {
      res.status(200).jsonp({
        count: result.length,
        orders: result.map(doc => {
          return {
            _id: doc._id,
            product: doc.product,
            quantity: doc.quantity,
            request: {
              type: 'GET',
              url: '/products/' + doc._id
            }
          }
        })
      })
    })
    .catch((err) => {
      res.status(500).jsonp({
        error: err
      });
    });
  /*res.status(200).json({
    message: 'Order were fetched'
  });*/
});

router.post('/', (req, res, next) => {
  // can´t create order products that not exist
  Product.findById(req.body.productId)
    .then(product => {
      if (!product) {
        return res.status(404).jsonp({
          message: 'product not found'
        })
      }
      const order = new Order({
        _id: mongoose.Types.ObjectId(),
        quantity: req.body.quantity,
        product: req.body.productId
      });
    
      return order.save()
    })
    .then((result) => {
      console.log(result);
      res.status(201).jsonp({
        message: 'Order stored!',
        createdOrder: {
          _id: result._id,
          product: result.product,
          quantity: result.quantity
        },
        request: {
          type: 'GET',
          url: '/products/' + result._id
        }
      })
    }).catch((err) => {
      res.status(500).jsonp({
        error: err
      });
    });
});

router.get('/:orderId', (req, res, next) => {
  Order.findById(req.params.orderId)
  .select('_id product quantity')
  .exec()
  .then(result => {
    if (!result) {
      return res.status(404).jsonp({
        message: 'Order not found'
      })
    }
    res.status(200).jsonp({
      order: result
    })
  })
  .catch(err => {
    console.log(err);
    res.status(500).jsonp({
      error: err
    })
  });
});

router.delete('/:orderId', (req, res, next) => {
  Order.remove({ _id: req.params.orderId })
  .exec()
  .then(result => {
    res.status(200).jsonp({
      message: 'Order Deleted!'
    })
  })
  .catch(err => {
    res.status(500).jsonp({
      error: err
    })
  })
});



module.exports = router;

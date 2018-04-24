
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Product = require('../models/products');

// handling routes

router.get('/', (req, res, next) => {
  Product
    .find()
    .select('name price _id')
    .exec()
    .then(docs => {
      const response = {
        count: docs.length,
        products: docs.map(doc => {
          return {
            _id: doc._id,
            name: doc.name,
            price: doc.price,
            request: {
              type: 'GET',
              urk: '/products/' + doc._id
            }
          }
        })
      };
      
      res.status(200).jsonp(response)
    })
    .catch(err => {
      console.log(err);
      res.status(500).jsonp({
        error: err
      })
    });
  
});

router.post('/', (req, res, next) => {

  const product = new Product({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price
  });
  product
    .save()
    .then(result => {
      res.status(201).json({
        message: 'Created product successfully!',
        createdProduct: {
          name: result.name,
          price: result.price,
          _id: result._id,
          request: {
            type: 'GET',
            urk: '/products/' + result._id
          }
        }
      });
    })
    .catch(err => { 
      console.log(err);
      res.status(500).json({
        error: err
      })
    });
});

router.get('/:productId', (req, res, next) => {
  const id = req.params.productId;
  Product.findById(id)
    .select('name price _id')
    .exec()
    .then(doc => {
      const response = {
        name: doc.name,
        price: doc.price,
        _id: doc._id
      }
      res.status(200).json(response)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({error: err})
    });

});

router.patch('/:productId', (req, res, next) => {
  const id = req.params.productId;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Product.update(
    { _id : id },
    { $set : updateOps }
  )
  .exec()
  .then(result => {
    res.status(200).jsonp({ 
      message: 'Product Updated!',
      request: {
        type: 'GET',
        urk: '/products/' + id
      }
     });
  })
  .catch(err => {
    console.log(err);
    res.status(500).jsonp({
      error: err
    })
  });
});

router.delete('/:productId', (req, res, next) => {
  const id = req.params.productId;
  Product
    .remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).jsonp({ 
        message: 'Product Deleted!',
        request: {
          type: 'GET',
          description: 'See all products!', 
          url: '/products', 
        }
       })
    })
    .catch(err => {
      res.status(500).jsonp({
        error: err
      });
    });
});



module.exports = router;

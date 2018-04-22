
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Product = require('../models/products');

// handling routes

router.get('/', (req, res, next) => {
  Product
    .find()
    .exec()
    .then(docs => {
      console.log(docs);
      if (docs.length > 0) 
        res.status(200).jsonp(docs)
      else
        res.status(404).jsonp({
          message: "No entry found"
        })
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
      // console.log(result);
      res.status(201).json({
        message: 'Handling POST request to /products',
        createdProduct: product
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
    .exec()
    .then(doc => {
      // console.log("From database", doc);
      if (doc) {
        res.status(200).json(doc)
      } else {
        res.status(404).json({
          message: 'No valid entry;'
        })
      }
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
  console.log(updateOps);
  Product.update(
    { _id : id },
    { $set : updateOps }
  )
  .exec()
  .then(result => {
    console.log(result);
    res.status(200).jsonp({ result });
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
      res.status(200).jsonp({ result })
    })
    .catch(err => {
      console.log(err);
      res.status(500).jsonp({
        error: err
      });
    });
});



module.exports = router;

const { Product } = require('../db');
const router = require('express').Router();

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    console.log('error retrieving all products');
    next(error);
  }
});

router.get('/:productId', async (req, res, next) => {
  try {
    const product = await Product.findByPk(+req.params.productId);
    res.json(product);
  } catch (error) {
    console.log('error retrieving single product');
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const createdProject = await Project.create({ ...req.body });
    res.status(201).json(createdProject);
  } catch (error) {
    console.log('error creating single product');
    next(error);
  }
});

router.put('/:productId', async (req, res, next) => {
  try {
    const projectBeingUpdated = await Project.findByPk(+req.params.productId);
    const wasUpdated = await projectBeingUpdated;
    res.json(wasUpdated);
  } catch (error) {
    console.log('error updating single product');
    next(error);
  }
});

router.delete('/:productId', async (req, res, next) => {
  try {
    const projectBeingDeleted = await Project.findByPk(+req.params.projectId);
    const wasDeleted = await projectBeingDeleted.destroy({ ...req.body });
    res.json(wasDeleted);
  } catch (error) {
    console.log('error deleting single product');
    next(error);
  }
});

module.exports = router;

const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll();
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
}); // working!

router.get('/:id', async (req, res) => {
    // find one category by its `id` value
    // be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product}], // the 'through' and 'as' are not needed because Category and Product are associated directly through the Product model (or is it the ProdcutTag model?)
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
}); // working!

router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create(req.body); // req.body is the data from the client
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
}); // working!

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id // this should update the category with the id that matches the id in the url
      }
    });
    res.status(200).json(categoryData);
  } catch (err) {
  res.status(500).json(err);
  }
}); // working!

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;

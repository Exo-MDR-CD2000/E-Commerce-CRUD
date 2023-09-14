const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/', async (req, res) => {
  // find all products
  // be sure to include its associated Category and Tag data
  try {
    const productData = await Product.findAll({
      include: [
        { model: Category }, 
        { model: Tag, as: 'product_has_tag(s)' } // I realized that I had to reference the alias that I defined in the index.js file in the models folder
      ]
    }).catch((err) => {
      console.log(err);
    });
    if (!productData) {
      res.status(404).json({ message: 'No products found!'});
      return;
    }
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
}); // working!

// get one product
router.get('/:id', async (req, res) => {
  // find a single product by its `id`
  // be sure to include its associated Category and Tag data
  try {
    const productData = await Product.findByPk(req.params.id, {
      include: [
        { model: Category },
        { model: Tag, as: 'product_has_tag(s)'}  
        ]
    });
    if (!productData) {
      res.status(404).json({ message: 'No product found with that id!'});
      return;
    }
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
}); // working!

// create new product
router.post('/', async (req, res) => {
   /* req.body should look like this...
      {
        product_name: "Basketball",
        price: 200.00,
        stock: 3,
        tagIds: [1, 2, 3, 4]
      }
    */
  try {
    const productData = await Product.create(req.body);
    if (req.body.tagIds.length) {
      const productTagIdArr = req.body.tagIds.map((tag_id) => {
        return {
          product_id: productData.id,
          tag_id,
        };
      });
      await ProductTag.bulkCreate(productTagIdArr);
    }

      // if no product tags, just respond
      res.status(200).json(productData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}); // working! Code has been refractored to use async/await. Use the code snippet 53-58 as a guide to make POST requests to insomnia for testing.

// update product
router.put('/:id', async (req, res) => {
  try {
    // update product data
    const productData = await Product.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (req.body.tagIds && req.body.tagIds.length) {
      const productTags = await ProductTag.findAll({
        where: { product_id: req.params.id },
      });

      // create filtered list of new tag_ids
      const productTagIds = productTags.map(({ tag_id }) => tag_id);
      const newProductTags = req.body.tagIds
        .filter((tag_id) => !productTagIds.includes(tag_id))
        .map((tag_id) => {
          return {
            product_id: req.params.id,
            tag_id,
          };
        });

      // figure out which ones to remove
      const productTagsToRemove = productTags
        .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
        .map(({ id }) => id);

      // run both actions
      await Promise.all([
        ProductTag.destroy({ where: { id: productTagsToRemove } }),
        ProductTag.bulkCreate(newProductTags),
      ]);
    }

    return res.json(productData);
  } catch (err) {
    // console.log(err);
    return res.status(400).json(err);
  }
});








router.delete('/:id', (req, res) => {
  // delete one product by its `id` value
});

module.exports = router;

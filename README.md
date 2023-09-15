# E-Commerce-CRUD
Using Sequelize to ensure CRUD operations for an e-comemrce back end.

## Description
The task was to develop the backend for an e-commerce site using sequelize. The entire code was provided and only the models and api routes were altered to make it functional. The models for category, products, product tags, tags were developed/altered and then routes were developed/altered to make the database functional via insomnia.
## Installation
Change the env variables first in the .env file. Only change the password to match your local mysql password. This is assuming the username is 'root'. Install the required npm packages using 'npm i' via terminal. Enter mysql and source the schema.sql file in the db folder. Also run 'node seeds/index.js' to populate the database with some example data. Please also have insomnia installed or similar equivalence to test the routes. Once everything above has been done, start the server by typing 'npm start' in terminal.

## Usage
There are three main models with seperate routes for each. Each route can be tested within insomnia. Enter in the provided localhost urls to test the routes.

- For the category model:
  - GET all categories: http://localhost:3001/api/categories
    - Displays a list of the categories
  - GET a category by id: http://localhost:3001/api/categories/:id
    - Replace ':id' with category id
  - POST a new category: http://localhost:3001/api/categories
    - This requires a json entry to be submiited. The Usage Tutorial video shows how to structure the json object.
  - PUT method to update a category by id: http://localhost:3001/api/categories/:id
    - This will update a category name by id.
  - DELETE a category by id: http://localhost:3001/api/categories/:id
    - This will delete a category by its id.

- For the product model:
  - GET all products: http://localhost:3001/api/products
    - This will display all products and their associated categories and tags. 
  - GET all products by id: http://localhost:3001/api/products/:id
    - Replace ':id' with the product id. This will find a single product and its associated categories and tags. 
  - POST a new category: http://localhost:3001/api/products/
    - This will create a new product. The product name, price, stock, and tag id's must be defined in the json object. The video will demonstrate how to do this.
  - PUT method to update an existing product http://localhost:3001/api/products/:id
    - Replace ':id' with the product id you wish to update. Using the json object structure from the video, you can update the product name, price, stock, and tag id's.
  - DELETE an existing product: http://localhost:3001/api/products/:id
    - Replace ':id' with the product id you wish to delete. This will delete the product and any categories and tags associated with that product.

- For the tag model:
  - GET all tags: http://localhost:3001/api/tags
    - This will display all tags.
  - GET a tag by id: http://localhost:3001/api/tags/:id
    - Replace ':id' with the tag id.
  - POST a new tag: http://localhost:3001/api/tags
    - Create a new tag by submitting a json object. The video demonstrates how to structure the json object.
  - PUT method to update a tag by id: http://localhost:3001/api/tags/:id
    - Replace ':id' with the tag id you wish to update. This will allow you to change the name of the selected tag.
  - DELETE a tag: http://localhost:3001/api/tags/:id
    - Replace ':id' with the tag id you wish to delete.



[Usage Tutorial](https://drive.google.com/file/d/11d_DcD8D5Twd5C1aqO4yZtF0jU7qvZtM/view)


## Credits

- Class notes and lessons on ORM

## License
This project is licensed under [![License](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

## Questions
If you have any questions regarding this project, please contact me at my [email](joseguillen587@yahoo.com) or visit my GitHub page at [GitHub Profile](https://github.com/Exo-MDR-CD2000).

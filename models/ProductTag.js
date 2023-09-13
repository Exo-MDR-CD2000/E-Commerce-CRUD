const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement:true
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product', // This is the name of the table
        key: 'id', // This is the column name of the referenced table
        unique: false // must be set to false since multiple tags can be applied to the same product
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag', // This is the name of the table
        key: 'id', // This is the column name of the referenced table
        unique: false
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;

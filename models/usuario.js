'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Usuario.belongsTo(models.Perfil, { foreignKey: 'id_perfil' });
    }
  }
  Usuario.init({
    usuario: DataTypes.STRING,
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    id_perfil: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};
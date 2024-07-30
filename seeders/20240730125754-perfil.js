'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Perfils', [
      {
        descripcion: 'Admin',
        estado: 'activo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Supervisor',
        estado: 'activo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Operador',
        estado: 'activo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Cliente',
        estado: 'activo',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Perfils', null, {});
  }
};

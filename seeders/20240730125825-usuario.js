'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Usuarios', [
      {
        usuario: 'adminuser',
        nombre: 'Admin',
        apellido: 'User',
        id_perfil: 1, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        usuario: 'supervisoruser',
        nombre: 'Supervisor',
        apellido: 'User',
        id_perfil: 2, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        usuario: 'operatoruser',
        nombre: 'Operator',
        apellido: 'User',
        id_perfil: 3, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        usuario: 'clientuser',
        nombre: 'Client',
        apellido: 'User',
        id_perfil: 4, 
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Usuarios', null, {});
  }
};

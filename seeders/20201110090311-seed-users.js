'use strict';
const {hashPass} = require('../helpers/bcrypt')
module.exports = {
  up: async (queryInterface, Sequelize) => {
   let password = '123456'
   password = hashPass(password)
   await queryInterface.bulkInsert('Users', 
   [{
     email: 'admin@mail.com',
     password: password,
     role: 'admin',
     createdAt: new Date(),
     updatedAt: new Date()
   }, 
   {
    email: 'customer@mail.com',
    password: password,
    role: 'customer',
    createdAt: new Date(),
    updatedAt: new Date()
  }], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {})
  }
};

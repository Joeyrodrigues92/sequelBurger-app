'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
     return queryInterface
   //creating a table
      .createTable('burgers', {
      //id of the new data (this is the same as 
      //if we made a table in a schema)
          id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          burger_name: Sequelize.STRING,
          devoured:{ 
            type: Sequelize.BOOLEAN,
            defaultValue: false
          }
      });
  },

  down: function (queryInterface, Sequelize) {
     return queryInterface
      .dropTable('burgers');
  }
};

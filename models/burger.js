
"use strict";

module.exports = function(sequelize, DataTypes) {
  
  var Burger = sequelize.define("Burger", {
    burger_name: DataTypes.STRING,
    devoured:{ 
              type: DataTypes.BOOLEAN, 
              defaultValue: false
            }
  }, {
    // don't add the timestamp attributes (updatedAt, createdAt)
      timestamps: false,

    // don't delete database entries but set the newly added attribute deletedAt
    // to the current date (when deletion was done). paranoid will only work if
    // timestamps are enabled
      //paranoid: true,

    // don't use camelcase for automatically added attributes but underscore style
    // so updatedAt will be updated_at
    underscored: true,

    // disable the modification of tablenames; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    // if you don't want that, set the following
    freezeTableName: true,

    // define the table's name
    tableName: 'burgers'
  });

  return Burger;
};


//-----------


// var orm = require("../config/orm.js");
// var burger = {
//   //cat.all function w/ callback parameter,then request
//   all: function(cb) {
//     //orm.all, with cats parameter 
//     orm.all("burgers", function(result) {
//      //result is cb'ed here*
//      //and cb passes back through 
//      //to get request function* 
//       cb(result);
//     });
//   },
  
//   // The variables cols and vals are arrays.
//   create: function(cols, vals, cb) {
//     orm.create("burgers", cols, vals, function(res) {
//       cb(res);
//     });
//   },

//   update: function(objColVals, condition, cb) {
//     orm.update("burgers", objColVals, condition, function(res) {
//       cb(res);
//     });
//   }
// };

// // Export the database functions for the controller (catsController.js).
// module.exports = burger;




'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'Hvalues', // table name
      'module_id', // new field name
      {
        type: Sequelize.INTEGER,
      }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(
      'Hvalues', // table name
      'module_id', // new field name
    );
  }
};

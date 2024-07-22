'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('motos', 'categoria', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'default' 
    });

    await queryInterface.addColumn('motos', 'preco', {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0.0 
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('motos', 'categoria');
    await queryInterface.removeColumn('motos', 'preco');
  }
};

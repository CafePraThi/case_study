'use strict';
module.exports = (sequelize, DataTypes) => {
  const Moto = sequelize.define('Moto', {
    marca: {
      type: DataTypes.STRING,
      allowNull: false
    },
    modelo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ano_fabricacao: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    quilometragem: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('Disponível', 'Vendida', 'Em Manutenção'),
      allowNull: false
    },
    categoria: {
      type: DataTypes.STRING,
      allowNull: false
    },
    preco: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    }
  }, {
    tableName: 'motos',
    timestamps: true
  });

  return Moto;
};

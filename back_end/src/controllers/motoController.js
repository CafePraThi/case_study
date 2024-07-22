const { query } = require('express');
const { Moto } = require('../models');
const { Op } = require('sequelize');

exports.getAllMotos = async (req, res) => {
  const query = req.query;
  const where = {};

  if (query.id) where.id = query.id;
  if (query.marca) where.marca = query.marca;
  if (query.modelo) where.modelo = query.modelo;
  if (query.ano_fabricacao) where.ano_fabricacao = query.ano_fabricacao;
  if (query.cor) where.cor = query.cor;
  if (query.quilometragem) where.quilometragem = query.quilometragem;
  if (query.status) where.status = query.status;
  if (query.categoria) where.categoria = query.categoria;
  if (query.preco) {
    where.preco = {};
    if (query.preco.gte) where.preco[Op.gte] = query.preco.gte;
    if (query.preco.lte) where.preco[Op.lte] = query.preco.lte;
  }

  const motos = await Moto.findAll({ where });
  res.json(motos);
};

exports.getMoto = async (req, res) => {
  const moto = await Moto.findByPk(req.params.id);
  res.json(moto);
};

exports.createMoto = async (req, res) => {
  const { marca, modelo, ano_fabricacao, cor, quilometragem, status, categoria, preco } = req.body;

  const missingFields = [];
  if (!marca) missingFields.push('marca');
  if (!modelo) missingFields.push('modelo');
  if (!ano_fabricacao) missingFields.push('ano_fabricacao');
  if (!cor) missingFields.push('cor');
  if (!quilometragem) missingFields.push('quilometragem');
  if (!status) missingFields.push('status');
  if (!categoria) missingFields.push('categoria');
  if (!preco) missingFields.push('preco');

  if (missingFields.length > 0) {
    return res.status(400).json({ error: 'Missing fields', missingFields });
  }

  const moto = await Moto.create({ marca, modelo, ano_fabricacao, cor, quilometragem, status, categoria, preco });
  res.status(201).json(moto);
};

exports.updateMoto = async (req, res) => {
  await Moto.update(req.body, {
    where: { id: req.params.id }
  });
  res.json({ message: 'Moto updated' });
};

exports.deleteMoto = async (req, res) => {
  await Moto.destroy({
    where: { id: req.params.id }
  });
  res.json({ message: 'Moto deleted' });
};
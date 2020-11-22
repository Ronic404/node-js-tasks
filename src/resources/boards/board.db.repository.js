const Board = require('./board.model');

const getAll = async () => Board.find({});

const getById = async id => Board.findOne({ _id: id });

const add = async board => Board.create(board);

const update = async boardToUpdate =>
  Board.updateOne({ _id: boardToUpdate.id }, boardToUpdate);

const deleteById = async id => Board.deleteOne({ _id: id });

module.exports = { getAll, getById, add, update, deleteById };

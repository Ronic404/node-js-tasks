const User = require('./user.model');

const getAll = async () => User.find({});

const getById = async id => User.findOne({ _id: id });

const getUserByProps = async props => User.findOne(props);

const add = async user => await User.create(user);

const update = async userToUpdate =>
  User.updateOne({ _id: userToUpdate.id }, userToUpdate);

const deleteById = async id => User.deleteOne({ _id: id });

module.exports = {
  getAll,
  getById,
  getUserByProps,
  add,
  update,
  deleteById
};

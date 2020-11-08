const DB = require('../../common/inMemoryDb');

const getAll = async () => {
  return await DB.getAllUsers();
};

const get = async id => {
  const user = await DB.getUser(id);
  if (!user) {
    throw new Error(`The user with id: ${id} was not find`);
  }
  return user;
};

const create = async user => {
  return await DB.createUser(user);
};

const update = async (id, user) => {
  return await DB.updateUser(id, user);
};

const remove = async id => {
  return await DB.removeUser(id);
};

module.exports = { getAll, get, create, update, remove };

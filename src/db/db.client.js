const mongoose = require('mongoose');
const { MONGO_CONNECTION_STRING } = require('../common/config');
const User = require('../resources/users/user.model');
const Board = require('../resources/boards/board.model');

const users = [
  new User({
    name: 'Admin',
    login: 'admin',
    password: 'admin'
  }),
  new User({ name: 'user1', login: 'login1', password: 'password1' }),
  new User({ name: 'user2', login: 'login2', password: 'password2' })
];

const boards = [new Board({ title: 'Board1' }), new Board({ title: 'Board2' })];

const connectToDB = cb => {
  mongoose.connect(MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('we are conected!');
    db.dropDatabase();
    users.forEach(user => user.save());
    boards.forEach(board => board.save());
    cb();
  });
};

module.exports = { connectToDB, users, boards };

const express = require('express');
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');
const userRouter = require('./resources/users/user.router');
const boardRouter = require('./resources/boards/board.router');
const taskRouter = require('./resources/tasks/task.router');
const reqLogMiddleware = require('./middlewares/reqLogMiddleware');
const errorHandlerMiddleware = require('./middlewares/errorHandlerMiddleware');
const logger = require('./logger');

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.set('json spaces', 2);

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/users', userRouter);

app.use('/boards', boardRouter);

boardRouter.use('/:boardId/tasks', taskRouter);

app.use(reqLogMiddleware);

app.use(errorHandlerMiddleware);

process
  .on('uncaughtException', err => {
    logger.error(`Uncaught Exception: ${err.message}`);
  })
  .on('unhandledRejection', err => {
    logger.error(`Unhandle Rejection: ${err.message}`);
  });

// throw Error('Oops!');
// Promise.reject(Error('Oops!'));

module.exports = app;

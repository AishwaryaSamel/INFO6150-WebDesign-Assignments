import todoRouter from './todo.route';

export default (app) => {
  app.use('/', todoRouter);
}
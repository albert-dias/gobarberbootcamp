import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Albert Dias',
    email: 'albert.uft@gmail.com',
    password_hash: '123454321',
  });

  res.json(user);
});

export default routes;

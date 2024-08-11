import { Router, Request, Response } from 'express';

import { CrateTaskController, DeleteTaskController, DetailTaskController, ListTasksController, UpdateTaskController } from './controllers';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  return res.json({ message: 'Hello World!' });
});

router.post('/task', new CrateTaskController().handle);

router.get('/tasks', new ListTasksController().handle);

router.get('/task', new DetailTaskController().handle);

router.delete('/task', new DeleteTaskController().handle);

router.put('/task', new UpdateTaskController().handle);

export {router};
import { Router, Request, Response } from 'express';

import multer from 'multer'

import { 
  AuthUserController,
  CrateTaskController,
  CreateUserController,
  DeleteTaskController, 
  DetailTaskController,
  ListTasksController,
  UpdateTaskController
} from './controllers';

import uploadConfig from './config/multer';

const router = Router();

const upload = multer(uploadConfig.upload('./tmp'));

router.get('/', (req: Request, res: Response) => {
  return res.json({ message: 'Hello World!' });
});

router.post('/task', new CrateTaskController().handle);

router.get('/tasks', new ListTasksController().handle);

router.get('/task', new DetailTaskController().handle);

router.delete('/task', new DeleteTaskController().handle);

router.put('/task', new UpdateTaskController().handle);


router.post('/user',upload.single('file'), new CreateUserController().handle);

router.post('/auth', new AuthUserController().handle);

export {router};
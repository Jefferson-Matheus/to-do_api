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

import { isAuthenticated } from './middlewares/isAuthenticated';

const router = Router();

const upload = multer(uploadConfig.upload('./tmp'));

router.get('/', (req: Request, res: Response) => {
  return res.json({ message: 'Hello World!' });
});

/**
 * @swagger
 * /task:
 *   post:
 *     summary: Cria uma tarefa
 *     tags:
 *       - tasks
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createTask'
 *     security:
 *       - token: []
 *     responses:
 *       200:
 *           description: sucesso 
 */

router.post('/task',isAuthenticated , new CrateTaskController().handle);

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: lista todas as tarefas
 *     tags:
 *       - tasks
 *     security:
 *       - token: [] 
 *     responses:
 *       200:
 *           description: sucesso  
 */

router.get('/tasks',isAuthenticated , new ListTasksController().handle);

/**
 * @swagger
 * '/task/:id':
 *    get:
 *      summary: lista um tarefa por ID
 *      tags:
 *        - tasks
 *      security:
 *        - token: []
 *      parameters:
 *        - in: query
 *          name: id
 *          required: true
 *          schema:
 *            type: string
 *      responses:
 *        200:
 *            description: sucesso
 */

router.get('/task/:id',isAuthenticated , new DetailTaskController().handle);

/**
 * @swagger
 * '/task/:id':
 *    delete:
 *      summary: Deleta um tarefa por ID
 *      tags:
 *        - tasks
 *      security:
 *        - token: []
 *      parameters:
 *        - in: query
 *          name: id
 *          required: true
 *          schema:
 *            type: string
 *      responses:
 *        200:
 *            description: sucesso
 */

router.delete('/task/:id',isAuthenticated , new DeleteTaskController().handle);

/**
 * @swagger
 * /task/:id:
 *   put:
 *     summary: Edita um tarefa por ID
 *     tags:
 *       - tasks
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/updateTask'
 *     security:
 *       - token: []
 *     parameters:
 *        - in: query
 *          name: id
 *          required: true
 *          schema:
 *            type: string
 *     responses:
 *       200:
 *           description: sucesso 
 */

router.put('/task/:id',isAuthenticated , new UpdateTaskController().handle);

/**
 * @swagger
 * /user:
 *   post:
 *     description: criação de um usuario
 *     tags:
 *       - auth
 *     requestBody:
 *       required: true 
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/createUser'
 *           encoding:
 *             file:
 *               contentType: image/png, image/jpg, image/webp 
 *     responses:
 *       200:
 *           description: sucesso
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/createUserRes'  
 */

router.post('/user',upload.single('file'), new CreateUserController().handle);

/**
 * @swagger
 * /auth:
 *   post:
 *     description: autorização
 *     tags:
 *       - auth
 *     requestBody:
 *       required: true 
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/auth'
 *     responses:
 *       200:
 *           description: sucesso
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/authRes'  
 */

router.post('/auth', new AuthUserController().handle);

export {router};
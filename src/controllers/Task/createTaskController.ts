import {Request,Response} from 'express'
import { CreateTaskService } from '../../services';

class CrateTaskController{
   async handle(req:Request,res:Response){
    const {title,description} = req.body;

    const createTaskService = new CreateTaskService;

    const task = await createTaskService.execute({title,description});
    res.status(201).json(task);
   }
}

export {CrateTaskController}; 
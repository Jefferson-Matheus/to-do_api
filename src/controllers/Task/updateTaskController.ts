import { Request, Response } from "express";
import { TaskInterface } from "../../types/requestTypes";
import { UpdateTaskService } from "../../services";

class UpdateTaskController {
 async handle(req:Request<any, any, TaskInterface>, res:Response) {
    const id = req.query.id as string;

    const task = req.body;
    
    const  updateTaskService  = new UpdateTaskService();

    const updatedTask = await updateTaskService.execute(task, id);

    res.status(200).json(updatedTask);
 }
}

export {UpdateTaskController};